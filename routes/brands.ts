import * as express from "express";
import { BrandController } from "../controllers/brand";
import { AuthenticationController } from "../controllers/authentication";

const router = express.Router();

/**
 * @swagger
 * /api/brands:
 *   post:
 *     summary: create brand
 *     tags:
 *      - brands
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: BrandName
 *                 example: string
 *               address:
 *                 type: string
 *                 description: BrandAddress
 *                 example: string
 *               link:
 *                 type: date
 *                 description: BrandLink
 *                 example: url
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.post(
  "/",
  AuthenticationController.protected,
  BrandController.createBrand
);

/**
 * @swagger
 *  /api/brands:
 *    get:
 *      summary: get brand
 *      tags:
 *        - brands
 *      responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/", BrandController.listBrand);

/**
 * @swagger
 * /api/brands/{brandId}:
 *   put:
 *     summary: update brand
 *     tags:
 *      - brands
 *     parameters:
 *        - in: path
 *          name: brandId
 *          schema:
 *              type: string
 *          required: true
 *          description: The brand ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: BrandName
 *                 example: string
 *               address:
 *                 type: string
 *                 description: BrandAddress
 *                 example: string
 *               link:
 *                 type: date
 *                 description: BrandLink
 *                 example: url
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.put(
  "/:brandId",
  AuthenticationController.protected,
  BrandController.updateBrand
);

/**
 * @swagger
 * /api/brands/{brandId}:
 *   delete:
 *     summary: delete brand
 *     tags:
 *      - brands
 *     parameters:
 *        - in: path
 *          name: brandId
 *          schema:
 *              type: string
 *          required: true
 *          description: The brand ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.delete("/:brandId", BrandController.deleteBrand);

/**
 * @swagger
 * /api/brands/{brandId}:
 *   get:
 *     summary: get brand
 *     tags:
 *      - brands
 *     parameters:
 *        - in: path
 *          name: brandId
 *          schema:
 *              type: string
 *          required: true
 *          description: The brand ID
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.get("/:brandId", BrandController.getBrandById);

export default router;
