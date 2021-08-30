import * as express from "express";
import { ProductController } from "../controllers/product";
const router = express.Router();

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: create product
 *     tags:
 *      - products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: productName
 *                 example: string
 *               thumbnail:
 *                 type: string
 *                 description: productThumbnail
 *                 example: string
 *               description:
 *                 type: string
 *                 description: productDescription
 *                 example: string
 *               code:
 *                 type: string
 *                 description: productCode
 *                 example: string
 *               brandId:
 *                 type: number
 *                 description: brandId
 *                 example: 0
 *               sourceId:
 *                 type: number
 *                 description: sourceId
 *                 example: 0
 *               categoryId:
 *                 type: number
 *                 description: categoryId
 *                 example: 0
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.post("/", ProductController.createProduct);

/**
 * @swagger
 *  /api/products:
 *    get:
 *      summary: get product
 *      tags: 
 *        - products
 *      responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/", ProductController.listProduct);


/**
 * @swagger
 * /api/products/{productId}:
 *   put:
 *     summary: update Product
 *     tags:
 *      - products
 *     parameters:
 *        - in: path
 *          name: productId
 *          schema:
 *              type: number
 *          required: true
 *          description: The product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: productName
 *                 example: string
 *               thumbnail:
 *                 type: string
 *                 description: productThumbnail
 *                 example: string
 *               description:
 *                 type: string
 *                 description: productDescription
 *                 example: string
 *               code:
 *                 type: string
 *                 description: productCode
 *                 example: string
 *               brandId:
 *                 type: number
 *                 description: brandId
 *                 example: 0
 *               sourceId:
 *                 type: number
 *                 description: sourceId
 *                 example: 0
 *               categoryId:
 *                 type: number
 *                 description: categoryId
 *                 example: 0
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.put("/:productId", ProductController.updateProduct);

/**
 * @swagger
 * /api/products/{productId}:
 *   delete:
 *     summary: delete product
 *     tags:
 *      - products
 *     parameters:
 *        - in: path
 *          name: productId
 *          schema:
 *              type: number
 *          required: true
 *          description: The product ID
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
 router.delete("/:productId", ProductController.deleteProduct);

/**
 * @swagger
 * /api/products/{productId}:
 *   get:
 *     summary: get product
 *     tags:
 *      - products
 *     parameters:
 *        - in: path
 *          name: productId
 *          schema:
 *              type: string
 *          required: true
 *          description: The product ID
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
  router.get("/:productId",  ProductController.getProductById);
 
export default router;
