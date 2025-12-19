import Redis from "ioredis";
import logger from "./logger.config";

export const redis = new Redis({
  host: "127.0.0.1",   // IMPORTANT for Windows
  port: 6379,
  enableReadyCheck: true,
});

redis.on("connect", () => {
  logger.info("✅ Connected to Redis");
});

redis.on("ready", () => {
  logger.info("🚀 Redis is ready");
});

redis.on("error", (err) => {
  logger.error("❌ Redis connection error", err);
});
