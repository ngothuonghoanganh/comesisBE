import * as express from "express";
import { InteractionController } from "../controllers/interaction";
import { AuthenticationController } from "../controllers/authentication";

const router = express.Router();

/**
 * @swagger
 * /api/interactions:
 *   post:
 *     summary: create interaction
 *     tags:
 *      - interactions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isLike:
 *                 type: boolean
 *                 description: isLike
 *                 example: false
 *               blogId:
 *                 type: number
 *                 description: BlogId
 *                 example: 0
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
  InteractionController.createInteraction
);

/**
 * @swagger
 *  /api/interactions:
 *    get:
 *      summary: get interaction
 *      tags:
 *        - interactions
 *      responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/", InteractionController.listInteraction);

/**
 * @swagger
 * /api/interactions/{interactionId}:
 *   put:
 *     summary: update Interaction
 *     tags:
 *      - interactions
 *     parameters:
 *        - in: path
 *          name: interactionId
 *          schema:
 *              type: string
 *          required: true
 *          description: The Interaction ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isLike:
 *                 type: boolean
 *                 description: isLike
 *                 example: false
 *               blogId:
 *                 type: number
 *                 description: BlogId
 *                 example: 0
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.put("/:interactionId", InteractionController.updateInteraction);

/**
 * @swagger
 * /api/interactions/{interactionId}:
 *   delete:
 *     summary: delete interaction
 *     tags:
 *      - interactions
 *     parameters:
 *        - in: path
 *          name: interactionId
 *          schema:
 *              type: string
 *          required: true
 *          description: The Interaction ID
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
router.delete("/:interactionId", InteractionController.deleteInteraction);

/**
 * @swagger
 * /api/interactions/{interactionId}:
 *   get:
 *     summary: get interaction
 *     tags:
 *      - interactions
 *     parameters:
 *        - in: path
 *          name: interactionId
 *          schema:
 *              type: string
 *          required: true
 *          description: The interaction ID
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.get("/:interactionId", InteractionController.getInteractionById);

export default router;
