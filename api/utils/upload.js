import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
const url = "mongodb://127.0.0.1:27017/shopville";

const storage = new GridFsStorage({
	url,
	options: { useNewUrlParser: true },
	file: (request, file) => {
		//returning the file name
		return `${Date.now()}-blog-${file.originalname}`;
	},
});

const upload = multer({ storage });
export default upload;
