const jwt = require("jsonwebtoken");
const config = require("../config/common.js");
//const config = process.env;
const verifyToken = (req, res, next) => {
    let token =
      req.body.token || req.query.token || req.headers["authorization"] || req.headers['x-access-token'];
  
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }
    try {
       token = token.replace("Bearer ","");
       token = token.replace("bearer ","");
      const decoded = jwt.verify(token, config.TOKENKEY);
      console.log(decoded);
      req.user = decoded;
    } catch (err) {
      return res.status(401).send(err);
    }
    return next();
  };
  
module.exports = verifyToken;