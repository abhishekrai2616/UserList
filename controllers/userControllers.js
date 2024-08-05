const User = require('../models/userModel');
const ErrorHandler=require('../utils/ErrorHandler');
const catchAsyncError=require('../middlewares/catchAsyncError');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    return next(new ErrorHandler(err.message, 500));
  }
};

exports.addUser = async (req, res, next) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phoneNo: req.body.phoneNo,
    position: req.body.position,
    country: req.body.country,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(new ErrorHandler(err.message, 400));
    } else {
      return next(new ErrorHandler(err.message, 500));
    }
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return next(new ErrorHandler('User not found', 404));

    user.name = req.body.name;
    user.email = req.body.email;
    user.phoneNo = req.body.phoneNo;
    user.position = req.body.position;
    user.country = req.body.country;

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(new ErrorHandler(err.message, 400));
    } else {
      return next(new ErrorHandler(err.message, 500));
    }
  }
};

exports.deleteUser = async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return next(new ErrorHandler('User not found', 404));
      }
      await user.deleteOne();
      res.status(200).json({
        success: true,
        message: 'User deleted successfully'
      });
    } catch (err) {
      return next(new ErrorHandler(err.message, 500));
    }
  };
  
