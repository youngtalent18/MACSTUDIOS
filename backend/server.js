import dns from "dns"
import dotenv from "dotenv"
import {connectDB} from "./config/db.js"
import app from "./app.js"

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();

const PORT = process.env.PORT || 6000

const startServer = async() => {
    try {
        await connectDB.then(()=>{
            app.listen(PORT, ()=>{
                console.log(`Server dey run for Port ${PORT}`);
            })
        })
    } catch (error) {
        console.error("faailed to start server ", error);
        process.exit(1);
    }
}

startServer();