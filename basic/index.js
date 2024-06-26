const { createServer } = require("http") // Default node js
const express = require("express") // import package
const bodyParser = require('body-parser')
const app = express() // hit package function

app.use(bodyParser.json()) // use boday parser as a middleware

let middelware = (req, res, next) => {
    console.log("hi from Middelware")
    next()
} // custom middleware

app.use(middelware) // use a cutom middleware

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

app.get('/user/info/:slug',(req, res)=>{
    let params = req.params; 
    let query = req.query; 
    console.log(params,query)
    res.send({
        status:true,
        messsage:"All Done"
    })
})

app.post('/contact-form',(req, res)=>{
    let body = req.body;
    
    if(body.name && body.email)
    {
        if(validateEmail(body.email))
        {
            res.send({
                status:true,
                message:"Yes done"
            })
        }
        else
        {
            res.send({
                status:false,
                message:"Email is not valid"
            })
        }
    }
    else
    {
        res.send({
            status:false,
            messsage:"Name and Email are required"
        })
    }
})

app.put('/contact-form/put',(req, res)=>{
    let body = req.body;
    
    if(body.name && body.email)
    {
        if(validateEmail(body.email))
        {
            res.send({
                status:true,
                message:"Yes done"
            })
        }
        else
        {
            res.status(500).send({
                status:false,
                message:"Email is not valid"
            })
        }
    }
    else
    {
        res.send({
            status:false,
            messsage:"Name and Email are required"
        })
    }
})

app.listen(3001,()=>{
    console.log("yes done")
})

// const server = createServer((req, res) => {
//     console.log(res,"res")
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end("Just Tesing");
// });

// // starts a simple http server locally on port 3000
// server.listen(3001, '127.0.0.1', () => {
//     console.log('Listening on 127.0.0.1:3001');
// });