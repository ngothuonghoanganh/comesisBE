import * as express from "express";
import { RiskLevelController } from "../controllers/riskLevel";
const router = express.Router();

/**
 * @swagger
 * /api/riskLevels:
 *   post:
 *     summary: create RiskLevel
 *     tags:
 *      - riskLevels
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               level:
 *                 type: string
 *                 description: level
 *                 example: string
 *               color:
 *                 type: string
 *                 description: color
 *                 example: string
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.post("/", RiskLevelController.createRiskLevel);

/**
 * @swagger
 *  /api/riskLevels:
 *    get:
 *      summary: get riskLevel
 *      tags: 
 *        - riskLevels
 *      responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/", RiskLevelController.listRiskLevel);


/**
 * @swagger
 * /api/riskLevels/{riskLevelId}:
 *   put:
 *     summary: update RiskLevel
 *     tags:
 *      - riskLevels
 *     parameters:
 *        - in: path
 *          name: riskLevelId
 *          schema:
 *              type: number
 *          required: true
 *          description: The riskLevel ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               level:
 *                 type: string
 *                 description: level
 *                 example: string
 *               color:
 *                 type: string
 *                 description: color
 *                 example: string
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.put("/:riskLevelId", RiskLevelController.updateRiskLevel);

/**
 * @swagger
 * /api/riskLevels/{riskLevelId}:
 *   delete:
 *     summary: delete riskLevel
 *     tags:
 *      - riskLevels
 *     parameters:
 *        - in: path
 *          name: riskLevelId
 *          schema:
 *              type: number
 *          required: true
 *          description: The riskLevel ID
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
 router.delete("/:riskLevelId", RiskLevelController.deleteRiskLevel);

/**
 * @swagger
 * /api/riskLevels/{riskLevelId}:
 *   get:
 *     summary: get riskLevel
 *     tags:
 *      - riskLevels
 *     parameters:
 *        - in: path
 *          name: riskLevelId
 *          schema:
 *              type: string
 *          required: true
 *          description: The riskLevel ID
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.get("/:riskLevelId", RiskLevelController.getRiskLevelById);

export default router;
