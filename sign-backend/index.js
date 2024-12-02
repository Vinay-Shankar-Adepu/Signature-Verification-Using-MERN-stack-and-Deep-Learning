const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const details = require('./models/details.js');
mongoose.connect('mongodb://localhost:27017/connectdb')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));
app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;   
        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required." });
        }
        const user = await details.findOne({ username },{_id:0});
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid password." });
        }
        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.post('/api/signup',async(req,res)=>{
    try {
        const { username, password } = req.body;   
        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required." });
        }
        const user = await details.create({ username,password });
        
        res.status(200).json({ message: "Signed up ", user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.post('/api/logout',(req,res)=>{

});
app.put('/api/account/change-password', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
});

app.post('/api/contact',(req,res)=>{

});
app.post('/api/login/oauth',(req,res)=>{

});
app.post('/api/upload-signature',(req,res)=>{
    
});

app.listen(6000,()=>{
    console.log("Server running on port 6000");
})