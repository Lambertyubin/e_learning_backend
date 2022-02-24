const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 6500,
  jwtSecret: process.env.JWT_SECRET || "My-topsecret_here",
  mongoUri:
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    "mongodb://" +
      (process.env.IP || "localhost") +
      ":" +
      (process.env.MONGO_PORT || "27017") +
      "/mern_online_classroom",
};

export default config;
