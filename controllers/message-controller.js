import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import Message from "../model/message-model.js";
import User from "../model/User-model.js";
import { createServer } from "http";
import { Server as SocketIOServer } from "socket.io";
import express from "express";

const app = express();

const server = createServer(app);
const io = new SocketIOServer(server);

export const sendMessage = catchAsyncError(async (req, res, next) => {
  console.log(req.body);
  const { senderId, receiverId, message } = req.body;

  if (!senderId || !receiverId || !message)
    return next(new ErrorHandler("Please enter all field", 400));

  const sender = await User.findById(senderId);
  const receiver = await User.findById(receiverId);
  if (!sender) {
    return next(new ErrorHandler("User Not Found!", 401));
  }
  if (!receiver) {
    return next(new ErrorHandler("User Not Found!", 401));
  }

  // Save the message to the database
  const newMessage = new Message({ senderId, receiverId, message });
  await newMessage.save();

  // Emit the new message to the recipient in real-time
  io.to(receiverId).emit("message", newMessage);

  res.status(201).json(newMessage);
});
