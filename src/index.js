const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const apiKey = process.env.API_KEY
const dbPassword = process.env.DB_PASSWORD

const app = express ()
app.use(express.json())
const port = process.env.PORT



const Concessionaria = mongoose.model('concessionaria', {
    id: Number,
    nome: String,
    modelo: Object,
    atributos: Object,
    data: {
        type: Date,
        default: () => {
            const now = new Date()
            const offset = -3; // UTC-3
            const adjustedDate = new Date(now.getTime() + offset * 60 * 60 * 1000)
            return adjustedDate
        },
    }
})



app.get('/api', async (req, res) => {
    const concessionarias = await Concessionaria.find()
    return res.send(concessionarias)
})

app.get('/api/:id', async (req, res) => {
    const concessionaria = await Concessionaria.findById(req.params.id)
    return res.send(concessionaria)
})

app.post('/api', async (req, res) => {
    if (req.body) {
        const concessionaria = new Concessionaria({
            id: req.body.id,
            nome: req.body.nome,
            modelo: req.body.modelo,
            atributos: req.body.atributos,
        });

        await concessionaria.save()

        return res.status(200).json(concessionaria)
    } else {
        return res.status(400).send('O corpo da requisição deve ser um objeto')
    }
})

app.delete('/api/:id', async (req, res) => {
    const concessionaria = await Concessionaria.findByIdAndDelete(req.params.id)
    return res.send(concessionaria)
})

app.put('/api/:id', async (req, res) => {
    if (req.body) {
        const concessionaria = await Concessionaria.findByIdAndUpdate(req.params.id, {
            id: req.body.id,
            nome: req.body.nome,
            modelo: req.body.modelo,
            atributos: req.body.atributos,
        }, {
            new: true
        })

        await concessionaria.save()

        return res.status(200).json(concessionaria)
    } else {
        return res.status(400).send('O corpo da requisição deve ser um objeto')
    }
})

app.listen(port, () => {
    mongoose.connect(`mongodb+srv://concessionaria:${dbPassword}@cluster0.5lwqmkc.mongodb.net/?retryWrites=true&w=majority`)

    console.log ('app running')
})



