const db = require("../models");

const createCmtQuestion = async (req,res)=>{
  const {cmtQuestion, questionId, userId} = req.body
  console.log(cmtQuestion, +questionId, userId);
  try {
    if(cmtQuestion.trim().split("").length>1){
      const result = db.commentQuestion.create({content:cmtQuestion, questionId: +questionId, userId:userId})
   
      return res.status(200).json(result)
    }else{
      return res.status(400).json("comment is required")
    }
    
  } catch (error) {
    return res.status(400).json(error)
  }
}

const createCmtAnswer =async (req,res)=>{
  const {useId, valueCmtQuestion, answersId} = req.body
  try {
    const result = await db.commentAnswers.create({userId: useId, content: valueCmtQuestion, answerId: answersId})
    return res.status(200).json(result)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const getCommentForAnswer = async (req,res)=>{
  const {idAnswer} = req.params

  try {
    const result = await db.commentAnswers.findAll({where:{answerId: idAnswer}, include:{model:db.User, attributes:["id", "username"]}})
    return res.status(200).json(result)
  } catch (error) {
    console.log(error);
    
  }
}

module.exports = {
  createCmtQuestion,
  createCmtAnswer,
  getCommentForAnswer
}