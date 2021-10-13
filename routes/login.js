const jwt = require("jsonwebtoken");
const config = require("../config/common.js");

module.exports = app => {
    app.post("/login", async (req, res) => {
        try {
            let token = jwt.sign(
                { user_id: "123456", email: "ketan@gmail.com" },
                config.TOKENKEY, { expiresIn: config.EXPIRESIN });
            res.status(200).json(token);
        } catch (err) {
          console.log('auth error...',err);
        }
    });
};