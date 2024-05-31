const customAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const authorizationMiddleware = async (req, res, next) => {
  const authHeader = req.header.authorization;

  if (!authHeader || !authHeaser.startsWith("Bearer")) {
    throw new CustomAPIError("No token is provided", 401);
  }
  const token = authHeader.split("")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new CustomAPIError("Not authorized", 401);
  }
  next();
};

module.exports = authorizationMiddleware;
