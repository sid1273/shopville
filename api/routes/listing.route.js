import express from "express";
import {
	createListing,
	deleteListing,
	updateListing,
	getListing,
	getListings,
} from "../controllers/listing.controller.js";
import { uploadfile, getfile } from "../controllers/file.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();
import upload from "../utils/upload.js";

router.post("/create", verifyToken, createListing);
router.delete("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, updateListing);
router.get("/get/:id", getListing);
router.get("/get", getListings);

router.post("/upload", upload.single("file"), uploadfile);
router.get("/:filename", getfile);

export default router;
