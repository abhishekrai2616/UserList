const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'], 
    minlength: [2, 'Name must be at least 2 characters long'], 
    maxlength: [100, 'Name must be less than 100 characters long']
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Email is not valid']
  },
  phoneNo: { 
    type: String, 
    required: [true, 'Phone number is required'],
    match: [/^\d{10}$/, 'Phone number must be 10 digits']
  },
  position: { 
    type: String, 
    required: [true, 'Position is required'], 
    minlength: [2, 'Position must be at least 2 characters long'], 
    maxlength: [100, 'Position must be less than 100 characters long']
  },
  country: { 
    type: String, 
    required: [true, 'Country is required'], 
    minlength: [2, 'Country must be at least 2 characters long'], 
    maxlength: [100, 'Country must be less than 100 characters long']
  },
  status: {
    type: String,
    default: 'Active'
  }
});

module.exports = mongoose.model('User', UserSchema);
