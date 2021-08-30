import express, { Application } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import path from "path";
import bodyParser from "body-parser";
import morgan, { StreamOptions } from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import * as http from "http";
import multer from "multer";

import cookies_reader from "./services/cookies";
import indexRoute from "./routes/index";
import userRoute from "./routes/users";
import fileRoute from "./routes/files";

import Logger from "./lib/logger";
import categoryRoute from "./routes/categories";
import treatmentRoute from "./routes/treatments";
import sourceRoute from "./routes/sources";
import voucherRoute from "./routes/vouchers";
import riskLevelRoute from "./routes/riskLevels";
import productRoute from "./routes/products";
import ingredientRoute from "./routes/ingredients";
import productIngredientRoute from "./routes/productIgredients";
import blogRoute from "./routes/blogs";
import brandRoute from "./routes/brands";
import commentRoute from "./routes/comments";
import interactionRoute from "./routes/interactions";
import { TreatmentProductController } from "./controllers/treatmentProduct";
import treatmentProductRoute from "./routes/treatmentProducts";
const upload = multer();
dotenv.config();
const app: Application = express();
const port = 3000;

const server: http.Server = http.createServer(app);

// swagger config
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for JSONPlaceholder",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express. It retrieves data from JSONPlaceholder.",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Development server",
    },
    {
      url: process.env.STG_HOST || "http://localhost:3000",
      description: "Development server",
    },
  ],
};
const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./routes/*.ts"],
};
const swaggerSpec = swaggerJSDoc(options);

// logger config
const stream: StreamOptions = {
  write: (message) => Logger.http(message),
};

const skip = () => {
  const env = process.env.NODE_ENV || "development";
  return env !== "development";
};

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream, skip }
);

// server config
app.use(morganMiddleware);
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(
  express.json({
    limit: "10kb",
  })
);
app.use(cookieParser());
app.use(cookies_reader);
app.use(upload.single("file"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// routes config
app.use("/api", indexRoute);
app.use("/api/users", userRoute);
app.use("/api/files", fileRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/treatments", treatmentRoute);
app.use("/api/sources", sourceRoute);
app.use("/api/vouchers", voucherRoute);
app.use("/api/riskLevels", riskLevelRoute);
app.use("/api/products", productRoute);
app.use("/api/ingredients", ingredientRoute);
app.use("/api/productIngredients", productIngredientRoute);
app.use("/api/blogs", blogRoute);
app.use("/api/brands", brandRoute);
app.use("/api/comments", commentRoute);
app.use("/api/interactions", interactionRoute);
app.use("/api/treatmentProducts", treatmentProductRoute);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
try {
  server.listen(process.env.PORT || 3000, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${error.message}`);
}
