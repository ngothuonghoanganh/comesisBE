import * as express from "express";
import { SourceController } from "../controllers/source";
const router = express.Router();

/**
 * @swagger
 * /api/sources:
 *   post:
 *     summary: create source
 *     tags:
 *      - sources
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               storeLink:
 *                 type: string
 *                 description: storeLink
 *                 example: url
 *               price:
 *                 type: number
 *                 description: price
 *                 example: 100000
 *               reviewLink:
 *                 type: string
 *                 description: reviewLink
 *                 example: url
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.post("/", SourceController.createSource);

/**
 * @swagger
 *  /api/sources:
 *    get:
 *      summary: get source
 *      tags: 
 *        - sources
 *      responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/", SourceController.listSource);


/**
 * @swagger
 * /api/sources/{sourceId}:
 *   put:
 *     summary: update source
 *     tags:
 *      - sources
 *     parameters:
 *        - in: path
 *          name: sourceId
 *          schema:
 *              type: string
 *          required: true
 *          description: The source ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               storeLink:
 *                 type: string
 *                 description: storeLink
 *                 example: url
 *               price:
 *                 type: number
 *                 description: price
 *                 example: 100000
 *               reviewLink:
 *                 type: string
 *                 description: reviewLink
 *                 example: url
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.put("/:sourceId", SourceController.updateSource);

/**
 * @swagger
 * /api/sources/{sourceId}:
 *   delete:
 *     summary: delete source
 *     tags:
 *      - sources
 *     parameters:
 *        - in: path
 *          name: sourceId
 *          schema:
 *              type: string
 *          required: true
 *          description: The source ID
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
 router.delete("/:sourceId", SourceController.deleteSource);

/**
 * @swagger
 * /api/sources/{sourceId}:
 *   get:
 *     summary: get source
 *     tags:
 *      - sources
 *     parameters:
 *        - in: path
 *          name: sourceId
 *          schema:
 *              type: string
 *          required: true
 *          description: The source ID
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.get("/:sourceId", SourceController.getSourceById);

export default router;