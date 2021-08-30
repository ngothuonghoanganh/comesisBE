import * as express from "express";
import { TreatmentController } from "../controllers/treatment";
const router = express.Router();

/**
 * @swagger
 * /api/treatments/:
 *   post:
 *     summary: create treatment
 *     tags:
 *      - treatments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ingredientId:
 *                 type: number
 *                 description: ingredientId
 *                 example: 1
 *               description:
 *                 type: string
 *                 description: treatment
 *                 example: string
 *               icon:
 *                 type: string
 *                 description: img
 *                 example: url
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.post("/", TreatmentController.createTreatment);

/**
 * @swagger
 *  /api/treatments/:
 *    get:
 *      summary: get treatment
 *      tags: 
 *        - treatments
 *      responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/", TreatmentController.listTreatment);


/**
 * @swagger
 * /api/treatments/{treatmentId}:
 *   put:
 *     summary: update treatment
 *     tags:
 *      - treatments
 *     parameters:
 *        - in: path
 *          name: treatmentId
 *          schema:
 *              type: string
 *          required: true
 *          description: The treatment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ingredientId:
 *                 type: number
 *                 description: ingredientId
 *                 example: 1
 *               description:
 *                 type: string
 *                 description: treatment
 *                 example: string
 *               icon:
 *                 type: string
 *                 description: img
 *                 example: url
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.put("/:treatmentId", TreatmentController.updateTreatment);

/**
 * @swagger
 * /api/treatments/{treatmentId}:
 *   delete:
 *     summary: delete treatment
 *     tags:
 *      - treatments
 *     parameters:
 *        - in: path
 *          name: treatmentId
 *          schema:
 *              type: string
 *          required: true
 *          description: The treatment ID
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
 router.delete("/:treatmentId", TreatmentController.deleteTreatment);

/**
 * @swagger
 * /api/treatments/{treatmentId}:
 *   get:
 *     summary: get treatment
 *     tags:
 *      - treatments
 *     parameters:
 *        - in: path
 *          name: treatmentId
 *          schema:
 *              type: string
 *          required: true
 *          description: The treatment ID
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.get("/:treatmentId", TreatmentController.getTreatmentById);

export default router;