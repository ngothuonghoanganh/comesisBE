import * as express from "express";
import { AuthenticationController } from "../controllers/authentication";
import { UserController } from "../controllers/user";

const router = express.Router();

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: login
 *     tags:
 *      - users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: object
 *                 description: username
 *                 example: string
 *               password:
 *                 type: object
 *                 description: username
 *                 example: string
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.post("/login", AuthenticationController.login);

/**
 * @swagger
 * /api/users/loginWithGoogle:
 *   post:
 *     summary: login with google
 *     tags:
 *      - users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               googleId:
 *                 type: object
 *                 description: googleId
 *                 example: string
 *               fitstName:
 *                 type: object
 *                 description: fitstName
 *                 example: string
 *               lastName:
 *                 type: object
 *                 description: lastName
 *                 example: string
 *               email:
 *                 type: object
 *                 description: email
 *                 example: string
 *               phone:
 *                 type: object
 *                 description: phone
 *                 example: string
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.post("/loginWithGoogle", AuthenticationController.loginWithGoogle);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: create user
 *     tags:
 *      - users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: object
 *                 description: googleId
 *                 example: string
 *               password:
 *                 type: object
 *                 description: googleId
 *                 example: string
 *               fitstName:
 *                 type: object
 *                 description: fitstName
 *                 example: string
 *               lastName:
 *                 type: object
 *                 description: lastName
 *                 example: string
 *               email:
 *                 type: object
 *                 description: email
 *                 example: string
 *               phone:
 *                 type: object
 *                 description: phone
 *                 example: string
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.post("/", AuthenticationController.createUser);

/**
 * @swagger
 * /api/users/logout:
 *   post:
 *     summary: logout
 *     tags:
 *      - users
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.post(
  "/logout",
  AuthenticationController.protected,
  AuthenticationController.logout
);



/**
 * @swagger
 *  /api/users/{userId}:
 *    get:
 *      summary: get users
 *      tags:
 *        - users
 *      parameters:
 *        - in: path
 *          name: userId
 *          schema:
 *              type: string
 *          description: The user ID
 *      responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get("/:userId" , AuthenticationController.protected, UserController.getUser)


/**
 * @swagger
 *  /api/users/profile/me:
 *    get:
 *      summary: get users
 *      tags:
 *        - users
 *      responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
 router.get("/profile/me" , AuthenticationController.protected, AuthenticationController.getMe)


/**
 * @swagger
 *  /api/users:
 *    get:
 *      summary: get user
 *      tags: 
 *        - users
 *      responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
 router.get("/", AuthenticationController.protected, UserController.listUser);

/**
 * @swagger
 * /api/users/{userId}:
 *   put:
 *     summary: update User
 *     tags:
 *      - users
 *     parameters:
 *        - in: path
 *          name: userId
 *          schema:
 *              type: number
 *          required: true
 *          description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: object
 *                 description: googleId
 *                 example: string
 *               password:
 *                 type: object
 *                 description: googleId
 *                 example: string
 *               fitstName:
 *                 type: object
 *                 description: fitstName
 *                 example: string
 *               lastName:
 *                 type: object
 *                 description: lastName
 *                 example: string
 *               email:
 *                 type: object
 *                 description: email
 *                 example: string
 *               phone:
 *                 type: object
 *                 description: phone
 *                 example: string
 *     responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
 router.put("/:userId", AuthenticationController.protected, UserController.updateUser); 

/**
 * @swagger
 * /api/users/{userId}:
 *   delete:
 *     summary: delete user
 *     tags:
 *      - users
 *     parameters:
 *        - in: path
 *          name: userId
 *          schema:
 *              type: number
 *          required: true
 *          description: The user ID
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
 router.delete("/:userId", AuthenticationController.protected, UserController.deleteUser);
 
export default router;
