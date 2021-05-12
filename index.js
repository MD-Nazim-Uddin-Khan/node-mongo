const express = require('express')

const cors = require('cors')

const app = express();

app.use(cors())

// const rootCall = (req, res) => res.send('Thank you very much')

// app.get('/', (req, res) => {
//     res.send("Node Ami onek pari....YAY") 
// });

// app.get('/', (req, res) => {

//     const fruit = {
//         product: 'Mango',
//         price: 70
//     }
//     res.send(fruit) 
// });

// app.get('/fruits/banana', (req, res)=> {
//     res.send({fruit: 'banana', quantity: 1000, price: 10000})
// })

const users = [ "korim", 'Moin', 'sabed', 'Susmita', 'Sohana', 'sabana' ]

app.get('/users/:id', (req, res)=> {
    const userId = (req.params.id)
    console.log(req.query.sort)
    const name = users[userId]
    res.send({userId, name});
})

app.listen(4000, ()=> console.log('Listening to port 4000'));