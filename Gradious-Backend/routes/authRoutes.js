let express = require("express");
let router = express.Router();
let authController = require("./../controllers/authControllers");

router.post("/login",authController.login);
router.post("/signup",authController.signup);

router.get("/signup", (req, res) => {
    res.send("Signup Route Working");
});

router.get("/login", (req, res) => {
    res.send("Login Route Working");
});
module.exports = router;