const bookModel = require("../../DB/models/BookModels")





const bookInfo = async  (req, res) => {
  const id = req.params.id
  bookModel
    .find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
}


const oneBook = async (req, res) => {
  let id = req.params.id
 
try {
  const onebook = await
  bookModel
  .findById({_id:id})
  res.status(200).json(onebook)
} catch (error) {
  res.send(error)
}
}

  const addBook = async (req, res) => {
    let { title , img , price   , pages} = req.body;
    const newBook = new bookModel({ title , img , price   , pages});
    try {
      if(newBook){
      const response = await newBook.save();
      res.status(201).json(response);
    } else{
      console.log("can't");
      res.send("can't post");
    } 
  }catch (error) {
      res.send(error);
    }
  }
  


  const deleteBook = async (req , res )=>{
    const id = req.params.id

   
      try {
          const dele = await bookModel.findByIdAndDelete({_id:id })
        if(dele){
          res.send("removed")
        } else  { 
          const dele = await bookModel.findByIdAndDelete({_id:id })

        }
      }
      catch (error) {
        res.send(error)
      }
      } 
    

      const updBook = async (req,res)=>{
      let {title , pages, price, img}= req.body;
      let {id} = req.params
      
      try {
        const upBooks = await bookModel.findByIdAndUpdate({_id: id},{title , pages, price, img}, { new: true });
        res.status(201).json(upBooks)
      } catch (error) {
        res.send(error)
      }
      }
    
    
  



/////////////////////////////////////////////////
  module.exports = { bookInfo , addBook ,oneBook ,deleteBook, updBook }