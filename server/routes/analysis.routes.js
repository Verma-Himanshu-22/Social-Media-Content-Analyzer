const express = require("express");
const upload = require("../config/multer.config");
const { handleAnalysis } = require("../controllers/analysis.controller");

const router = express.Router();

router.post("/", upload.single("file"), handleAnalysis);

module.exports = router;
