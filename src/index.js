const express = require('express')
const app = express()
const morgan = require('morgan')
const cors= require('cors')

require('./database')
app.use(express.json())
app.set('Port',4000)
app.use(morgan('dev'))
app.use(cors({origen:'*'}))


app.use('/usuario',require('./routes/usuario.route'))

app.listen(app.get('Port'),()=>{
    console.log('servidor escuchando por el puerto', app.get('Port'))
})