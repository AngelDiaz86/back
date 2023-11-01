import { Application } from "express";
import userRoutes from "../routes/user.routes";
import authRoutes from "../routes/auth.routes";
import logger from "../utils/logger";
import productRoutes from "../routes/product.routes";

export const register = async (app: Application) => {
  app.use("/users", userRoutes);
  app.use("/product", productRoutes);
  app.use("/auth", authRoutes);
  logger.info("🟢 Routes registered");
};