const mongodb=require('mongodb').MongoClient
const url = 'mongodb+srv://marilia:YoCccdWJGx5qCNr5@cluster0.izdwia8.mongodb.net/?retryWrites=true&w=majority'

const obj=[
    {nome:"Ana",sobrenome:"Santos"},
    {nome:"Bruna",sobrenome:"Santos"},
    {nome:"Carla",sobrenome:"Sales"},
    {nome:"Joana",sobrenome:"Nascimento"},
    {nome:"Pedro",sobrenome:"Silva"},
    {nome:"Matheus",sobrenome:"Santos"},
]

mongodb.connect(url,(erro,banco)=>{
    if(erro)throw erro
    const dbo=banco.db("Cadastro de nomes")
    const colecao="cadastro"
    dbo.collection(colecao).insertMany(obj,(erro,resultado)=>{
        if(erro)throw erro
         console.log(resultado.insertedCount + "novo curso inserido")
        banco.close()
    })  
})