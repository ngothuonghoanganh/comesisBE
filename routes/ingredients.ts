import * as express from "express";
import { IngredientController } from "../controllers/ingredient";
const router = express.Router();

/**
 * @swagger
 * /api/ingredients:
 *   post:
 *     summary: create Ingredient
 *     tags:
 *      - ingredients
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: name
 *                 example: string
 *               description:
 *                 type: string
 *                 description: description
 *                 example: string
 *               riskLevelId:
 *                 type: number
 *                 description: riskId
 *                 example: 0
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.post("/", IngredientController.createIngredient);

/**
 * @swagger
 *  /api/ingredients:
 *    get:
 *      summary: get Ingredient
 *      tags: 
 *        - ingredients
 *      responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/", IngredientController.listIngredient);


/**
 * @swagger
 * /api/ingredients/{ingredientId}:
 *   put:
 *     summary: update Ingredient
 *     tags:
 *      - ingredients
 *     parameters:
 *        - in: path
 *          name: ingredientId
 *          schema:
 *              type: number
 *          required: true
 *          description: The ingredient ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: name
 *                 example: string
 *               description:
 *                 type: string
 *                 description: description
 *                 example: string
 *               riskLevelId:
 *                 type: number
 *                 description: riskId
 *                 example: 0
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.put("/:ingredientId", IngredientController.updateIngredient);

/**
 * @swagger
 * /api/ingredients/{ingredientId}:
 *   delete:
 *     summary: delete ingredient
 *     tags:
 *      - ingredients
 *     parameters:
 *        - in: path
 *          name: ingredientId
 *          schema:
 *              type: number
 *          required: true
 *          description: The ingredient ID
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
 router.delete("/:ingredientId", IngredientController.deleteIngredient);

/**
 * @swagger
 * /api/ingredients/{ingredientId}:
 *   get:
 *     summary: get ingredient
 *     tags:
 *      - ingredients
 *     parameters:
 *        - in: path
 *          name: ingredientId
 *          schema:
 *              type: string
 *          required: true
 *          description: The ingredient ID
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.get("/:ingredientId", IngredientController.getIngredientById);

export default router;
