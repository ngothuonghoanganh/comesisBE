import * as express from "express";
import { AuthenticationController } from "../controllers/authentication";
import { CommentController } from "../controllers/comment";

const router = express.Router();

/**
 * @swagger
 * /api/comments:
 *   post:
 *     summary: create comment
 *     tags:
 *      - comments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               blogId:
 *                 type: number
 *                 description: BlogId
 *                 example: null
 *               productId:
 *                 type: number
 *                 description: ProductId
 *                 example: null
 *               content:
 *                 type: string
 *                 description: content
 *                 example: string
 *               rating:
 *                 type: number
 *                 description: content
 *                 example: 0
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.post("/", AuthenticationController.protected, CommentController.createComment);

/**
 * @swagger
 *  /api/comments:
 *    get:
 *      summary: get comments
 *      tags: 
 *        - comments
 *      responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/", AuthenticationController.protected, CommentController.listComment);


/**
 * @swagger
 * /api/comments/{commentId}:
 *   put:
 *     summary: update comment
 *     tags:
 *      - comments
 *     parameters:
 *        - in: path
 *          name: commentId
 *          schema:
 *              type: string
 *          required: true
 *          description: The Comment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               blogId:
 *                 type: number
 *                 description: BlogId
 *                 example: null
 *               productId:
 *                 type: number
 *                 description: ProductId
 *                 example: null
 *               content:
 *                 type: string
 *                 description: content
 *                 example: string
 *               rating:
 *                 type: number
 *                 description: content
 *                 example: 0
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.put("/:commentId", AuthenticationController.protected, CommentController.updateComment);

/**
 * @swagger
 * /api/comments/{commentId}:
 *   delete:
 *     summary: delete comment
 *     tags:
 *      - comments
 *     parameters:
 *        - in: path
 *          name: commentId
 *          schema:
 *              type: string
 *          required: true
 *          description: The Comment ID
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
 router.delete("/:commentId", AuthenticationController.protected, CommentController.deleteComment);

/**
 * @swagger
 * /api/comments/{commentId}:
 *   get:
 *     summary: get comment
 *     tags:
 *      - comments
 *     parameters:
 *        - in: path
 *          name: commentId
 *          schema:
 *              type: string
 *          required: true
 *          description: The comment ID
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.get("/:commentId", AuthenticationController.protected, CommentController.getCommentById);

export default router;
