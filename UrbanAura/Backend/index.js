const express = require('express');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const cors = require('cors')

const app = express();
app.use(cors())
const port = 3000;

app.use(express.json());

// MongoDb
// UserName =>aymaan
// Pass =>1234
// Url => mongodb+srv://aymaanpathan5:rLj04qLDL0aSmw2D@cluster0.av7ch3a.mongodb.net/

// MongoDb Connection
const connectDb = async()=>{
    try {
      const response = await mongoose.connect(
        'mongodb+srv://aymaan:1234@cluster0.rv9jdh7.mongodb.net/ecommerce',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000,
        }
      )
    } catch (error) {
        console.log('Error in Mongo',error);
        
    }
}
connectDb();

// Model
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    cartitem: { 
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('User',userSchema)

// const salt = 10
// Register
app.post('/register', async (req, res) => {
    const {email,password} = req.body
    try {
        let existedUser = await User.findOne({ email: req.body.email, password: req.body.password });

        if(existedUser) {
            return res.status(400).json({success:false,error:"User Already Exists"})
        }
        let cart = {};
        for (let i = 0; i < 200; i++) {
            cart[i] = 0;
            
        }
        const newUser = await User.create({
            email:email,
            password:password,
            cart:cart
        })
        // Creating Token
        const data = {id:newUser.id}
        const Token = jwt.sign(data,'Secret_Token');
        res.json({success:true,Token})
    } catch (error) {
        console.log('Error While Creating a User',error);
        
    }
   
})


// Login
app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({email:req.body.email});
        if(user) {
            const passCompare = await bcrypt.compare(req.body.password, user.password);
            if(passCompare) {
                const data = {id:user.id};
                const Token = jwt.sign(data,'Secret_Token');
                res.json({success:true,Token})
            }
            else {
                res.json({success:false,errors:'Password is incorrect'})
            }
        }
        else {
            res.json({success:false,errors:'Email is incorrect'})
        }
    } catch (error) {
        console.log('Error While Login',error); 
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})



app.listen(port,()=>{
    console.log(`App is Live on ${port}`);
    
})

