require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Sử dụng biến môi trường
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/testcrud';

// Kết nối MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.use(express.json());

const itemRoutes = require('./routes/item.routes');
app.use('/api', itemRoutes);

app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
