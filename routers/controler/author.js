const authorModel = require("../../DB/models/AuthorModels")


const getAuthor = async (req , res) =>{
    authorModel
    .find()
    .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.send(err);
      });
}


const addAuthor = async (req, res) => { 
 let {name , age , nationalty , img , gender , books} = req.body

 const newAuthor = new authorModel({name , age , nationalty , img , gender , books})
 try {
     if(newAuthor){
         const response = await newAuthor.save();
         res.status(201).json(response)
     }
     
 } catch (error) {
    res.send(error);
 }
}


const deleteArth = async (re,res)=>{
  const id = req.params.id;

  try {
    const dele = await authorModel.findOneAndDelete({_id: id});
    res.status(201).json(dele);
    
  } catch (error) {
    res.send(error)
    
  }
  

}


const updetArth = async (req,res)=>{
  const {name, age, nationalty, img, gender, books } = req.body;
  const {id} = req.params
   try {
     
    const upArthor = await authorModel.findByIdAndUpdate({_id: id},{ 
      name, age, nationalty, img, gender, books 
     }, {new: true});
    res.status(201).json(upArthor);
   } catch (error) {
     res.send(error);
   }
}





module.exports = {getAuthor , addAuthor, deleteArth, updetArth}