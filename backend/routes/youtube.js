import express from "express";
import axios from "axios";

const router = express.Router();

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

let cachedVideos = [];
let lastFetched = 0;

// Cache for 10 minutes
const CACHE_DURATION = 10 * 60 * 1000;

router.get("/latest", async (_, res) => {
  try {
    // Return cached videos if they're still fresh
    const cacheIsFresh =
      cachedVideos.length > 0 &&
      Date.now() - lastFetched < CACHE_DURATION;

    if (cacheIsFresh) {
      return res.json({
        success: true,
        videos: cachedVideos,
        cached: true,
      });
    }

    if (!YOUTUBE_API_KEY || !YOUTUBE_CHANNEL_ID) {
      return res.status(500).json({
        success: false,
        message: "YouTube API configuration is missing.",
      });
    }

    /*
     * First get the channel's uploads playlist.
     */
    const channelResponse = await axios.get(
      "https://www.googleapis.com/youtube/v3/channels",
      {
        params: {
          part: "contentDetails",
          id: YOUTUBE_CHANNEL_ID,
          key: YOUTUBE_API_KEY,
        },
      }
    );

    const channel = channelResponse.data.items?.[0];

    if (!channel) {
      return res.status(404).json({
        success: false,
        message: "YouTube channel not found.",
      });
    }

    const uploadsPlaylistId =
      channel.contentDetails.relatedPlaylists.uploads;

    /*
     * Get latest videos from the uploads playlist.
     *
     * playlistItems.list costs considerably less quota
     * than repeatedly searching the channel.
     */
    const videosResponse = await axios.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        params: {
          part: "snippet,contentDetails",
          playlistId: uploadsPlaylistId,
          maxResults: 6,
          key: YOUTUBE_API_KEY,
        },
      }
    );

    const videos = videosResponse.data.items
      .filter((item) => item.snippet?.resourceId?.videoId)
      .map((item) => {
        const videoId = item.snippet.resourceId.videoId;

        return {
          id: videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail:
            item.snippet.thumbnails?.maxres?.url ||
            item.snippet.thumbnails?.high?.url ||
            item.snippet.thumbnails?.medium?.url ||
            item.snippet.thumbnails?.default?.url,
          publishedAt: item.snippet.publishedAt,
          channelTitle: item.snippet.channelTitle,
          url: `https://www.youtube.com/watch?v=${videoId}`,
          embedUrl: `https://www.youtube.com/embed/${videoId}`,
        };
      });

    // Update cache
    cachedVideos = videos;
    lastFetched = Date.now();

    return res.json({
      success: true,
      videos,
      cached: false,
    });
  } catch (error) {
    console.error(
      "YouTube API Error:",
      error.response?.data || error.message
    );

    return res.status(500).json({
      success: false,
      message: "Unable to fetch latest YouTube videos.",
    });
  }
});

export default router;