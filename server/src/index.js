require('express-async-errors');
const express = require('express')
const cors = require('cors')
const authRouter = require('./routes/auth')

const app = express()
console.log('Iniciando servidor bibliotequinha')

require('./database')

app.use(cors())
app.use(express.json());

app.use('/auth', authRouter)

app.get('/', (req, res) => res.send('Servidor http bibliotequinha!'))

app.use((error, req, res, next) => {
  res.status(500).json({
    error: 'Ocorreu um erro inesperado!',
    message: error.toString()
  })
  console.error('[!] Erro: ', error)
})

app.listen(8080, () => {
  console.log('Servidor aberto na porta :8080')
})