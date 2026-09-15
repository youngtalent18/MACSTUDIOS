import User from "../models/user.js";
import { generateTokens,setCookies } from "../lib/utils/generateToken.js";
import redis from "../config/redis.js";

const buildUserPayload = (user) => ({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
});

const storeRefreshToken = async (userId, refreshToken) => {
  await redis.set(
    `refresh_token:${userId}`,
    refreshToken,
    {
      EX: 7 * 24 * 60 * 60,
    }
  );
};

export const registerUser = async(req, res) => {
    try {
        const { name, email, password, } = req.body;

        if(!email || !password || !name) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        if (email) {
            const isValidEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);

            if (!isValidEmail) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid email",
                });
            }
        }

        const existingEmail = await User.findOne({ email });

        if(existingEmail) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        const user = await User.create({
            name,
            email,
            password,
        });

        return res.status(201).json({ success: true, user, message: "User registered successfully" });
        
        
    } catch (error) {
        console.log("Register error:", error);

        return res.status(500).json({
        success: false,
        message: "Internal server error",
        });
    }
}

export const loginUser = async (req,res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        if (email) {
            const isValidEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);

            if (!isValidEmail) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid email",
                });
            }
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const isMatch =
            await user.comparePassword(password);

            if (!isMatch) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid email or password",
                });
            }

        
        await user.save();

        const {accessToken,refreshToken} = await generateTokens(user._id);
        
            // STORE REFRESH TOKEN
            await storeRefreshToken(
              user._id,
              refreshToken
            );
        
            // SET COOKIES
            setCookies(
              res,
              accessToken,
              refreshToken
            );
        
            // RESPONSE
            return res.status(200).json({
              success: true,
        
              // OPTIONAL FOR FRONTEND
              accessToken,
        
              user: buildUserPayload(user),
            });

    } catch (error) {
        console.log("Login error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

export const logoutUser = async (req, res) => {
  try {
    // DELETE REFRESH TOKEN
    if (req.user?._id) {
      await redis.del(
        `refresh_token:${req.user._id}`
      );
    }

    // CLEAR ACCESS TOKEN COOKIE
    res.clearCookie("accessToken", {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure:
        process.env.NODE_ENV === "production",
    });

    // CLEAR REFRESH TOKEN COOKIE
    res.clearCookie("refreshToken", {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure:
        process.env.NODE_ENV === "production",
    });

    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });

  } catch (error) {
    console.log("Logout error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const refresh_token = async (req,res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message:
          "No refresh token provided",
      });
    }

    // VERIFY TOKEN
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    // CHECK REDIS TOKEN
    const storedToken = await redis.get(
      `refresh_token:${decoded.userId}`
    );

    if (storedToken !== refreshToken) {
      return res.status(403).json({
        success: false,
        message: "Invalid refresh token",
      });
    }

    // CREATE NEW ACCESS TOKEN
    const accessToken = jwt.sign(
      { userId: decoded.userId },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );

    // SET NEW ACCESS TOKEN COOKIE
    res.cookie(
      "accessToken",
      accessToken,
      {
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 15 * 60 * 1000,
      }
    );

    return res.status(200).json({
      success: true,
      message:
        "Access token refreshed",
    });

  } catch (error) {
    console.log(
      "Refresh token error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getUserProfile = async (req,res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json(user);

  } catch (error) {
    console.log("Get profile error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};