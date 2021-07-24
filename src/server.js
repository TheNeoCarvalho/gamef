const express = require('express');

const User = require('./models/User');

require('dotenv').config()

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;
            
app.post('/register', async (req, res) => {

    const {name, username, email, password} = req.body;
    const user = new User;

    user.name = name;
    user.email = email;
    user.username = username;
    user.password = password;
            
    const userCreate = await user.save();
    return res.send({ message: "User created successull!" })
        
});

app.listen(port, () => console.log("Server is running"))