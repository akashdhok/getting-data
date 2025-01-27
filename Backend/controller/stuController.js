const stuModel = require("../models/stuModel")
const saveData =async (req , res)=>{
    let{rollno , name , city , fees} = req.body
    const data = await stuModel.create({
        rollno : rollno,
        name : name,
        city : city,
        fees : fees
    })
    res.send(data)
}
const displayData = async(req , res)=>{
    const data = await stuModel.find();
    res.send(data)
}

const searchData = async(req , res)=>{
    const {rollno} = req.body
      let data = await stuModel.find({rollno:rollno})
      res.send(data)
}
module.exports = {
    saveData,
    displayData,
    searchData
}