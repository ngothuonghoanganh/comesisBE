import * as express from "express";
import { VoucherController } from "../controllers/voucher";
const router = express.Router();

/**
 * @swagger
 * /api/vouchers:
 *   post:
 *     summary: create voucher
 *     tags:
 *      - vouchers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: voucherName
 *                 example: string
 *               expireDate:
 *                 type: date
 *                 description: expireDate
 *                 example: 01/01/2022
 *               description:
 *                 type: string
 *                 description: description
 *                 example: string
 *               brandId:
 *                 type: number
 *                 description: brandId
 *                 example: 0
 *               image:
 *                 type: string
 *                 description: voucherImg
 *                 example: url
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.post("/", VoucherController.createVoucher);

/**
 * @swagger
 *  /api/vouchers:
 *    get:
 *      summary: get voucher
 *      tags: 
 *        - vouchers
 *      responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/", VoucherController.listVoucher);


/**
 * @swagger
 * /api/vouchers/{voucherId}:
 *   put:
 *     summary: update voucher
 *     tags:
 *      - vouchers
 *     parameters:
 *        - in: path
 *          name: voucherId
 *          schema:
 *              type: number
 *          required: true
 *          description: The voucher ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: voucherName
 *                 example: string
 *               expireDate:
 *                 type: date
 *                 description: expireDate
 *                 example: 01/01/2022
 *               description:
 *                 type: string
 *                 description: description
 *                 example: string
 *               brandId:
 *                 type: number
 *                 description: brandId
 *                 example: 0
 *               image:
 *                 type: string
 *                 description: voucherImg
 *                 example: url
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.put("/:voucherId", VoucherController.updateVoucher);

/**
 * @swagger
 * /api/vouchers/{voucherId}:
 *   delete:
 *     summary: delete voucher
 *     tags:
 *      - vouchers
 *     parameters:
 *        - in: path
 *          name: voucherId
 *          schema:
 *              type: number
 *          required: true
 *          description: The voucher ID
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
 router.delete("/:voucherId", VoucherController.deleteVoucher);

/**
 * @swagger
 * /api/vouchers/{voucherId}:
 *   get:
 *     summary: get voucher
 *     tags:
 *      - vouchers
 *     parameters:
 *        - in: path
 *          name: voucherId
 *          schema:
 *              type: string
 *          required: true
 *          description: The voucher ID
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.get("/:voucherId", VoucherController.getVoucherById);

export default router;
