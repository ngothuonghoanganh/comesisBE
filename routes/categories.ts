import * as express from "express";
import { CategoryController } from "../controllers/category";

const router = express.Router();

/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: create category
 *     tags:
 *      - categories
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 description: categoryType
 *                 example: string
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.post("/", CategoryController.createCategory);

/**
 * @swagger
 *  /api/categories:
 *    get:
 *      summary: get category
 *      tags: 
 *        - categories
 *      responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/", CategoryController.listCategory);


/**
 * @swagger
 * /api/categories/{categoryId}:
 *   put:
 *     summary: update category
 *     tags:
 *      - categories
 *     parameters:
 *        - in: path
 *          name: categoryId
 *          schema:
 *              type: string
 *          required: true
 *          description: The category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 description: categoryType
 *                 example: string
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.put("/:categoryId", CategoryController.updateCategory);

/**
 * @swagger
 * /api/categories/{categoryId}:
 *   delete:
 *     summary: delete category
 *     tags:
 *      - categories
 *     parameters:
 *        - in: path
 *          name: categoryId
 *          schema:
 *              type: string
 *          required: true
 *          description: The category ID
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
 router.delete("/:categoryId", CategoryController.deleteCategory);

/**
 * @swagger
 * /api/categories/{categoryId}:
 *   get:
 *     summary: get category
 *     tags:
 *      - categories
 *     parameters:
 *        - in: path
 *          name: categoryId
 *          schema:
 *              type: string
 *          required: true
 *          description: The category ID
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.get("/:categoryId", CategoryController.getCategoryById);

export default router;
