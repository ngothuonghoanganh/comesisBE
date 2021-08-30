import * as express from "express";
import { AuthenticationController } from "../controllers/authentication";
import { BlogController } from "../controllers/blog";

const router = express.Router();

/**
 * @swagger
 * /api/blogs:
 *   post:
 *     summary: create blog
 *     tags:
 *      - blogs
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: BlogTitle
 *                 example: string
 *               content:
 *                 type: string
 *                 description: BlogContent
 *                 example: string
 *               date:
 *                 type: date
 *                 description: BlogDate
 *                 example: MM/DD/YYYY
 *               image:
 *                 type: string
 *                 description: BlogImage
 *                 example: imgurl
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.post("/", AuthenticationController.protected, BlogController.createBlog);

/**
 * @swagger
 *  /api/blogs:
 *    get:
 *      summary: get blog
 *      tags: 
 *        - blogs
 *      responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/", BlogController.listBlog);


/**
 * @swagger
 * /api/blogs/{blogId}:
 *   put:
 *     summary: update blog
 *     tags:
 *      - blogs
 *     parameters:
 *        - in: path
 *          name: blogId
 *          schema:
 *              type: string
 *          required: true
 *          description: The blog ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: BlogTitle
 *                 example: string
 *               content:
 *                 type: string
 *                 description: BlogContent
 *                 example: string
 *               date:
 *                 type: date
 *                 description: BlogDate
 *                 example: MM/DD/YYYY
 *               image:
 *                 type: string
 *                 description: BlogImage
 *                 example: imgurl
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.put("/:blogId",AuthenticationController.protected, BlogController.updateBlog);

/**
 * @swagger
 * /api/blogs/{blogId}:
 *   delete:
 *     summary: delete blog
 *     tags:
 *      - blogs
 *     parameters:
 *        - in: path
 *          name: blogId
 *          schema:
 *              type: string
 *          required: true
 *          description: The blog ID
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
 router.delete("/:blogId", BlogController.deleteBlog);

/**
 * @swagger
 * /api/blogs/{blogId}:
 *   get:
 *     summary: get blog
 *     tags:
 *      - blogs
 *     parameters:
 *        - in: path
 *          name: blogId
 *          schema:
 *              type: string
 *          required: true
 *          description: The blog ID
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.get("/:blogId", BlogController.getBlogById);

export default router;
