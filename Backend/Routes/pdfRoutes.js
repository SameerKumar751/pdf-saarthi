const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { uploadPdf } = require('../controllers/pdfController');

const router = express.Router();

const uploadsDir = path.join(__dirname, '..', 'uploads');

// __dirname The folder where the current JavaScript file is located.
// '..' Go up into parent directory of the current file.
// 'uploads' The name of the folder where the uploaded files will be stored.
// path.join() joins these pieces together into one proper file path.

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });

  
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Only PDF files are allowed'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

router.post('/upload', upload.single('pdf'), uploadPdf);

module.exports = router;