require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const path = require('path')

connection();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => 
    console.log(`listening on port ${port}`)
)