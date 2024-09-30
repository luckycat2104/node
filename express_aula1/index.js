const express = require('express')
const app = express()
const port  = 3000 //variavel ambiente
const path = require("path")
const basepath = path.join(__dirname, 'Aula1')

//ler o body
app.use(
    express.urlencoded({ //converter para o formato url
        extended: true, //copiar parametros dos objetos filhos
    })
)
app.use(express.json())

const checkAuth = function(req, res, next){
    req.authStatus = true
    if (req.authStatus){
        console.log ('Está logado, pode continuar!')
    } else {
        console.log ('Não está logado, faça o login')
    }
}
app.use(checkAuth)
app.get(`users/add`, (req, res) => {
    res.sendFile(`${basepath}/forms.html`)
})
app.post('/users/save', (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const email = req.body.email
    console.log(name) 
    console.log(email)
})


app.get('/users/:id', (req, res) => {  //det retorna o valor
    const id = req.params.id //resgatar parametros da url
    console.log(`Estamos buscando o usuário: ${id}`) //resgatar o usuario do banco
    res.sendFile(`${basepath}/users.html`) // sendFile: transferir arquivos. basepath: especifica a pasta raiz

})

app.get('/', (req, res) => {
    res.sendFile(`${basepath}/index.html`)
})

app.listen(port, () => {
    console.log(`app esta rodando na porta ${port}`)
})



