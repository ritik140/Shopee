import { Router } from "express";
import { verifyAdmin, verifyJwt } from "../Middleware/auth.middleware.js";
import { upload } from "../Middleware/multer.middleware.js";
import {
  addItem,
  updateItem,
  deleteItem,
  getItem,
} from "../controllers/item.controller.js";

const router = Router();

router.route("/add-item").post(
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]),

  verifyJwt,
  verifyAdmin,
  addItem
);
router
  .route("/:itemId")
  .patch(verifyJwt, verifyAdmin, upload.single("image"), updateItem)
  .delete(verifyJwt, verifyAdmin, deleteItem)
  .get(verifyJwt, verifyAdmin, getItem);

export default router;
