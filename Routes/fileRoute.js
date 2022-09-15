const express = require("express");
const { GLBModels } = require("../DB/db");
const { Filez } = require("../Model/fileModel");
const router = express.Router();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dnjkwgmvv",
  api_key: "839597729259519",
  api_secret: "5EE_IBhy6QhMJX73l9V4NsOR__k",
  secure: true,
});


router.route('/').get(async(req,res)=>{
    try{
        const getGLBData = await Filez.find();
        if(getGLBData) return res.status(200).json({success:true,getGLBData})
        else return res.status(422).json({success:false,message:"Failed to get data"})
    }catch(error){
        console.log(error.message)
    }
})

router.route("/upload").post(async (req, res) => {
  try {
    const { fileName } = req.body;
    const file = req?.files?.dfile;
    let threeContent = {
      name: fileName,
    };
    if (file) {
      await cloudinary.uploader.upload(
        file.tempFilePath,
        async (err, result) => {
          if (result) {
            threeContent = {
              ...threeContent,
              file3d: result.secure_url,
            };
          } else {
            console.log("Error occured while uploading File");
            res.status(500).json({
              status: false,
              message: "File uploadation to cloudinary failed",
              errorDetail: err,
            });
          }
        }
      );
    }
    const newFilez = new Filez(threeContent);
    const savedFile = await newFilez.save();
    return res.status(201).json({ success: "true", savedFile });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
