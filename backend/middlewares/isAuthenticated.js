import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "Unauthorized, token missing", success: false });
    }

    // FIX: Changed JWT_SCERECT to JWT_SECRET to match your .env file
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    
    if (!req.user) {
      return res.status(401).json({ message: "User session not found", success: false });
    }
    
    next();
  } catch (error) {
    console.error("Error in authentication middleware:", error);
    return res.status(401).json({ message: "Invalid or expired authorization token", success: false });
  }
};