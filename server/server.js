require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')

connection();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

if (process.env.NODE_ENV == 'production'){
    app.use(express.static('client/build'))
}

app.listen(port, () => 
    console.log(`listening on port ${port}`)
)