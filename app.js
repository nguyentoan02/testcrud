const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const itemRoutes = require('./routes/item.routes');

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/testcrud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/api', itemRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
