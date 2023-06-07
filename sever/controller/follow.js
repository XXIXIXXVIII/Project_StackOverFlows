const db = require("../models");

const getFollowQuestion = async(req,res)=>{
  const {userId, questionId} = req.body
  const check = await db.UserFollowQuestion.findOne({where:{userId: userId, questionId: +questionId}})
  if(check){
    return res.status(200).json("have")
  }else{
    return res.status(200).json("notfound")
  }
}

const postFollowQuestion = async(req,res)=>{

  try {
    const {userId, questionId} = req.body
    const check = await db.UserFollowQuestion.findOne({where:{userId: userId, questionId: +questionId}})
    if(!check){
      const result = await db.UserFollowQuestion.create({userId: userId, questionId: +questionId})
      return res.status(200).json("Question saved to For later.")
    }else{
      const result = await db.UserFollowQuestion.destroy({where:{userId: userId, questionId: +questionId}})
      return res.status(200).json("Question removed from saves.")
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}


const getFollowAnswer = async(req,res)=>{
  const {userId, questionId} = req.body
  const check = await db.UserFollowQuestion.findOne({where:{userId: userId, questionId: +questionId}})
  if(check){
    return res.status(200).json("have")
  }else{
    return res.status(200).json("notfound")
  }
}

const postFollowAnswer = async(req,res)=>{

  try {
    const {userId, questionId} = req.body
    const check = await db.UserFollowQuestion.findOne({where:{userId: userId, questionId: +questionId}})
    if(!check){
      const result = await db.UserFollowQuestion.create({userId: userId, questionId: +questionId})
      return res.status(200).json("Question saved to For later.")
    }else{
      const result = await db.UserFollowQuestion.destroy({where:{userId: userId, questionId: +questionId}})
      return res.status(200).json("Question removed from saves.")
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = {getFollowQuestion, postFollowQuestion, postFollowAnswer, getFollowAnswer}