import multer from "multer";
const storage = multer.memoryStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
export const upload = multer({ storage: storage });