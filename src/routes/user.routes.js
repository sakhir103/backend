import { Router } from "express"
import { registerUser } from "../controllers/user.controller.js"
import { upload } from "../middlewares/multer.middleware.js"

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",  // frontend name is same
            maxCount: 1
        },
        {
            name: "coverImage", // frontend name will be same
            maxCount: 1
        }
    ]),
    registerUser
)

export default router