import * as express from "express";
import { fileController } from "../controllers/file";


const router = express.Router();

/**
 * @swagger
 * /api/files/upload:
 *   post:
 *     summary: file upload
 *     tags:
 *      - file
 *     requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              file:
 *                type: string
 *                format: binary
 *     consumes:
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.post('/upload', fileController.upload)

export default router;