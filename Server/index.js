const express = require('express')
const mongoose=require('mongoose')
const app = express()
const { Schema } = mongoose;


const PORT = 1010
const DB_URL = "mongodb+srv://mi7layp4g:cavidan21@cluster0.q5ymman.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



const ProductSchema = new Schema(
  {
    title: { type: String, require: true },
    image: { type: String, require: true },
    description: { type: String, require: true },
    author:{ type: String, require:true},
    price: { type: Number, require: true }
  }
);

const ProductModel = mongoose.mongoose.model("Products", ProductSchema);



app.get('/api/products', async (req, res) => {
  try {
    const products = await  ProductModel.find({});
    if (products.length > 0) {
      res.status(200).send({message: "success", data: products})
    }else{
      res.status(204).send({message: "empty data", data: null})
    }
  } catch (error) {
    res.status(500).message({message: error.message})
  }
})
app.get('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);
    if (product) {
      res.status(200).send({message: "succes", data: product })
    } else {
      res.status(404).send({message: "not found", data: null })
    }
  } catch (error) {
    res.status(500).message({message: error.message})
  }
})
app.post('/api/products', (req, res) => {
})
app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;
  try {
    
  } catch (error) {
    res.status(500).message({message: error.message})
  }
})
app.put('/api/products/:id', (req, res) => {
})
app.patch('/api/products/:id', (req, res) => {
})

mongoose.connect(DB_URL)
  .then(() => {
    console.log('Connected!');
    app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}, base url is http://localhost:${PORT}/`)
  })}
).catch((err)=>{
    console.log(err);
})