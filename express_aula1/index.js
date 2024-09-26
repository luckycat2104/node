const express = require('express')
const app = express()
const port  = 3000 //variavel ambiente

const path = require("path")
const basepath = path.join(__dirname, 'Aula1')

app.get('/', (req, res) => {
    res.sendFile(`${basepath}/index.html`)
})

app.listen(port, () => {
    console.log(`app esta rodando na porta ${port}`)
})



