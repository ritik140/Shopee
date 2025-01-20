import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { upload } from "../Middleware/multer.middleware.js";
import { addItem } from "../controllers/item.controller.js";

const router = Router();

router.route("/add-item").post(
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]),

  (req, res, next) => {
    req.role = 'admin';  // Add 'role' to the request object
    next();  // Proceed to the next middleware (verifyJwt)
  },

  verifyJwt,
  addItem
);
// router.route("/update-item").patch(verifyJwt, updateItem);
// router.route("/delete-item").delete(verifyJwt, deleteItem);

export default router;
