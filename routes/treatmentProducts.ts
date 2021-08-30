import * as express from "express";
import { TreatmentProductController } from "../controllers/treatmentProduct";
import { TreatmentProduct } from "../models/treatmentProduct";
const router = express.Router();

/**
 * @swagger
 * /api/treatmentProducts:
 *   post:
 *     summary: create treatment_product
 *     tags:
 *      - treatment_products
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
 *               treatmentId:
 *                 type: number
 *                 description: treatId
 *                 example: 0
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.post("/", TreatmentProductController.createTreatPro);

/**
 * @swagger
 *  /api/treatmentProducts:
 *    get:
 *      summary: get treatment_product
 *      tags: 
 *        - treatment_products
 *      responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/", TreatmentProductController.listTreatPro);


/**
 * @swagger
 * /api/treatmentProducts/{treatmentProductId}:
 *   put:
 *     summary: update treatmentProduct
 *     tags:
 *      - treatment_products
 *     parameters:
 *        - in: path
 *          name: treatmentProductId
 *          schema:
 *              type: number
 *          required: true
 *          description: The treatmentProducts ID
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
 *               treatmentId:
 *                 type: number
 *                 description: treatId
 *                 example: 0
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.put("/:treatmentProductId", TreatmentProductController.updateTreatPro);

/**
 * @swagger
 * /api/treatmentProducts/{treatmentProductId}:
 *   delete:
 *     summary: delete treatmentProduct
 *     tags:
 *      - treatment_products
 *     parameters:
 *        - in: path
 *          name: treatmentProductId
 *          schema:
 *              type: number
 *          required: true
 *          description: The treatmentProducts ID
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
 router.delete("/:treatmentProductId", TreatmentProductController.deleteTreatPro);

/**
 * @swagger
 * /api/treatmentProducts/{treatmentProductId}:
 *   get:
 *     summary: get treatment_product
 *     tags:
 *      - treatment_products
 *     parameters:
 *        - in: path
 *          name: treatmentProductId
 *          schema:
 *              type: string
 *          required: true
 *          description: The treatment_product ID
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.get("/:treatmentProductId", TreatmentProductController.getTreatProById);

export default router;
