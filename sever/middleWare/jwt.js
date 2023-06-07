const jwt = require("jsonwebtoken");

const middleWareJwtController = {
  verifyToken: (req, res, next) => {
    console.log("object23232323")
    const token = req.headers.authorization;
    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
        if (err) {
          return res.status(401).json({ message: "Invalid Token" });
        }
        req.user = user;
        return next();
      });
    } else {
      return res.status(401).json({ message: "Invalid Token11111111" });
    }
  },
};

module.exports = middleWareJwtController;
