import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Support custom profile images or empty defaults gracefully
    let image_filename = req.file ? `${req.file.filename}` : "";

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      image: image_filename,
    });

    // Exclude security credential fields dynamically before client responses
    const userResponse = user.toObject();
    delete userResponse.password;

    return res
      .status(201)
      .json({ message: "User created successfully", success: true, user: userResponse });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User credentials not found", success: false });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password", success: false });
    }
    
    // FIX: Change JWT_SCERECT to JWT_SECRET to match your .env file
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    const userResponse = user.toObject();
    delete userResponse.password;

    return res.status(200).json({ message: "Login successful", success: true, token, user: userResponse });
  } catch (error) {
    console.error("Login Error:", error); // Added to help you see the real error in terminal
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};