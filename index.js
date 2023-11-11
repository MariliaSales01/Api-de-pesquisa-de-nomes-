const express = require('express')
const port = 3000
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://marisales194:3cL3tJvOLeuofYlc@filmes-api.wcjq52n.mongodb.net/?retryWrites=true&w=majority')

const Film = mongoose.model('Film', {
  title: String,
  description: String,
  image_url: String,
  trailer_url: String,
})

app.get("/", (req,res) => {
  res.json({message: 'Hello World!'}) 
});

app.post("/", async (req,res) =>{
    const film = new Film({
      title: req.body.title,
      description: req.body.description,
      image_url: req.body.image_url,
      trailer_url: req.body.trailer_url
    })

  await film.save()
  res.send(film)
})

app.listen(port, () => {
    console.log(`Server funcionando na porta ${port}.`);
});