import express from 'express';
//import { connect, model, Schema } from 'mongoose';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';//new
import pkg from 'body-parser';//new
const { json } = pkg;//new
//import { json } from 'body-parser';

// Initialize app
dotenv.config();//new
const app = express();
//require('dotenv').config();
// Middleware
app.use(cors());
app.use(json());//new
//app.use(express.json());

// MongoDB Atlas Connection String (replace <your-uri> with your MongoDB Atlas URI)
const dbURI = process.env.MONGO_URI;

//connect(dbURI)//, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose
.connect(dbURI) 
.then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

// User Schema and Model
// const User = mongoose.model('User', new mongoose.Schema({
//   firstname: { type: String, required: true },
//   lastname: { type: String, required: true },
//   mobile: { type: String, required: true, match: /^[0-9]{10}$/ },
//   gender: { type: String, required: true },
//   email: { type: String, required: true, match: /.+\@.+\..+/ },
//   address: { type: String, required: true },
//   javaFullStack: { type: Boolean, default: false },
//   mern: { type: Boolean, default: false },
//   mean: { type: Boolean, default: false },
//   fathername: { type: String, required: true },
//   mothername: { type: String, required: true },
//   fmobile: { type: String, required: true, match: /^[0-9]{10}$/ },
//   passwd: { type: String, required: true, minlength: 6 },
// }));
const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  mobile: { type: String, required: true, match: /^[0-9]{10}$/ },
  gender: { type: String, required: true },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  address: { type: String, required: true },
  javaFullStack: { type: Boolean, default: false },
  mern: { type: Boolean, default: false },
  mean: { type: Boolean, default: false },
  fathername: { type: String, required: true },
  mothername: { type: String, required: true },
  fmobile: { type: String, required: true, match: /^[0-9]{10}$/ },
  passwd: { type: String, required: true, minlength: 6 },
});
const User = mongoose.model('User', userSchema);

// POST Route for Registration
app.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User registered successfully!', user });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(400).json({ message: 'Error registering user', error });
  }
  
});
// app.get('/',(_, res) => {
//   res.send('Server is running!');
// });


// Fetch all registered users//2222
app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
});




// Start the Server
//const PORT = 5000;
//app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});