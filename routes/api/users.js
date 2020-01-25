var express = require('express');
const User = require("../../models/user")
const jwt = require("jsonwebtoken")
const auth = require("../../modules/auth");
var router = express.Router();

// User registration
router.post("/signup", (req, res, next) => {
  User.create(req.body, (err, User) => {
    if(err) return next(err)
    if(!User) return res.json({message: "User not found", success: false})
    res.json({User, success: true, })
  })
})

// User login
router.post("/login", (req, res, next) => {
  let{email, password} = req.body
  User.findOne({ email}, (err, user) => {
    if(err) return next(err)
    if(!user) return res.json({success: false, message: "Invalid email"})
    user.verifyPassword(password, (err, matched) => {
      if(err) return next(err);
      if(!matched)
      return res.status(422).json({success: false, message: "Invalid Password"})

      // jwt auth

      jwt.sign(
        { 
          userid: user._id,
          username: user.username,
          email: user.email,
          isuser: user.isAdmin
        },
        "secret",
        (err, token) => {
          if(err) return next(err)
          res.json({success: true, message: "You are now logged in", token });
        }
      )
    })
  })
})

// get user's listings

router.get("/", (req, res, next)=>{
  user.find({}, "-password", (err, users) => {
    if(err) return next(err);
    if(!users)
    return res.json({ success: false, message: "Users not found "})
    res.json({users, success: true})
  })
})

// get single user

router.get("/:id", (req, res, next) => {
  const id = req.params.id
  user.findById(id, "-password", (err, user) =>{
    if(err) return next(err)
    if(!user) return res.json({success: false, message: "User not found"})
    res.json({user, success: true})
  })
})

router.use(auth.verifyToken)

// update user

router.put("/:id", (req, res, next) =>{
  const id = req.params.id
  user.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
    if (err) return next(err)
    if(!user) return res.json({success: false, message: "User not found"})
    res.json({user, success: true})
  })
})



module.exports = router;
