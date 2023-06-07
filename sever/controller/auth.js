const db = require("../models/index")
const argon = require("argon2");
const jwt = require("jsonwebtoken")
require('dotenv').config()

const login = async(req,res)=>{
  try {
    const user = await db.User.findOne({where:{username:req.body.username}})
    if(!user){
      return res.status(400).json("invalid username or password")
    }
    const checkPass = await argon.verify(user.password, req.body.password)
    if(!checkPass){
      return res.status(400).json("invalid username or password")
    }
    const accessToken = generateAccessToken(user)
    const {password, ...userData} = user.dataValues
    return res.status(200).json({userData, accessToken})
  } catch (error) {
    return res.status(400).json("some thing went wrong")
  }

}

const signup = async (req,res)=>{
  try {
    const user = await db.User.findOne({where:{username:req.body.username}})
  if(user){
    return res.status(200).json("username already exists")
  }
  let hashPassword =await argon.hash(req.body.password)
  const newUser = await db.User.create({username:req.body.username,password:hashPassword,displayName:req.body.displayname, registerMethod:'login'})
  const profileUser = await db.ProfileUser.create({userId: newUser.id})
  const accessToken = generateAccessToken(newUser)

  const { password, ...dataUser} = newUser.dataValues

  return res.status(200).json({dataUser, accessToken})
  } catch (error) {
    return res.status(200).json("some thing went wrong")
  }
  
}

const generateAccessToken = (user)=>{
  return jwt.sign({
    id:user.id,
    sub: user.username
  },
  process.env.JWT_SECRET,
  {expiresIn:"360d"})
}


module.exports = { login, signup}