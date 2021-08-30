import * as express from "express";
import { AuthenticationController } from "../controllers/authentication";

const router = express.Router();

/**
 * @swagger
 *  /api/:
 *    get:
 *      summary: test
 *      tags:
 *        - test api
 *      responses:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/", AuthenticationController.protected, async (req: any, res: any, next) => {
  try {
    // const role: Role = await Role.query().first();
    // const role2: any = await Role.query()
    //   .select("user.FirstName")
    //   .join("user", "role.Id", "user.RoleId")
    //   .first();
    const user = req.user
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
});
export default router;
