const router = require("express").Router();
const { processingFile } = require("../controllers/filesController");

// Login route
router.post("/processing-data", processingFile);

module.exports = router;
