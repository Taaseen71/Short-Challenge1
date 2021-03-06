const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
let subscribers = require('./subscribers.json');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))


app.listen(PORT, () => console.log(`Express Server listening on port ${PORT}.`))


app.get('/', (req, res) => {
    res.send("This is Root!");
})

app.get("/subscribers", async (req, res) => {
    res.json(subscribers);
})
app.get("/subscribers/:id", async (req, res) => {
    const { id } = req.params
    const subscriber = subscribers.filter(subscriber => subscriber.id === id)[0]
    res.json(subscriber);
})

app.post('/subscribers', (req, res) => {
    const subscriber = req.body
    subscribers.push(subscriber)
    res.json(subscribers)
})

app.put('/subscribers/:id', async (req, res) => {
    const { id } = req.params
    const subscriberIndex = subscribers.findIndex(subscriber => subscriber.id === id)
    const subscriber = { ...subscribers[subscriberIndex], ...req.body }
    subscribers.splice(subscriberIndex, 1, subscriber);
    res.json(subscriber);
})
