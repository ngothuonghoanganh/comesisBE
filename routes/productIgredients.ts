import * as express from "express";
import { ProductIngredientController } from "../controllers/productIngredient";
const router = express.Router();

/**
 * @swagger
 * /api/productIngredients:
 *   post:
 *     summary: create product_ingredient
 *     tags:
 *      - product_ingredients
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: number
 *                 description: proId
 *                 example: 0
 *               ingredientId:
 *                 type: number
 *                 description: ingId
 *                 example: 0
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.post("/", ProductIngredientController.createProIn);

/**
 * @swagger
 *  /api/productIngredients:
 *    get:
 *      summary: get product_ingredient
 *      tags: 
 *        - product_ingredients
 *      responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/", ProductIngredientController.listProIn);


/**
 * @swagger
 * /api/productIngredients/{productIngredientId}:
 *   put:
 *     summary: update productIngredient
 *     tags:
 *      - product_ingredients
 *     parameters:
 *        - in: path
 *          name: productIngredientId
 *          schema:
 *              type: number
 *          required: true
 *          description: The product_ingredient ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: number
 *                 description: proId
 *                 example: 0
 *               ingredientId:
 *                 type: number
 *                 description: ingId
 *                 example: 0
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.put("/:productIngredientId", ProductIngredientController.updateProIn);

/**
 * @swagger
 * /api/productIngredients/{productIngredientId}:
 *   delete:
 *     summary: delete product_ingredient
 *     tags:
 *      - product_ingredients
 *     parameters:
 *        - in: path
 *          name: productIngredientId
 *          schema:
 *              type: number
 *          required: true
 *          description: The product_ingredient ID
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
 router.delete("/:productIngredientId", ProductIngredientController.deleteProIn);

/**
 * @swagger
 * /api/productIngredients/{productIngredientId}:
 *   get:
 *     summary: get product_ingredient
 *     tags:
 *      - product_ingredients
 *     parameters:
 *        - in: path
 *          name: productIngredientId
 *          schema:
 *              type: string
 *          required: true
 *          description: The product_ingredient ID
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.get("/:productIngredientId", ProductIngredientController.getProductIngredientById);

export default router;
