const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/',(req,res)=>{
    res.write("Hello world!");
    res.end();
})

app.post("/add",(req,res)=>{
    let limit=1000000;
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let message="the sum of given two numbers";
    let sum = num1 + num2;
    let status="success";
    if(!num1 || !num2){
        res.send({
            status:"error",
            message:"Invalid data types",
        });
    }
    if(num1 < -limit || num2 < -limit || sum < -limit){
        message="Underflow";
        status="error";
    }
    if(num1 > limit || num2 > limit || sum > limit){
        message="Overflow";
        status="error";
    }
    res.send({
        status:status,
        message:message,
        sum: sum,
    });
});

app.post("/sub",(req,res)=>{
    let limit=1000000;
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let message="the difference of given two numbers";
    let diff = num1 - num2;
    let status="success";
    if(!num1 || !num2){
        res.send({
            status:"error",
            message:"Invalid data types",
        });
    }
    if(num1 < -limit || num2 < -limit || diff < -limit){
        message="Underflow";
        status="error";
    }
    if(num1 > limit || num2 > limit || diff > limit){
        message="Overflow";
        status="error";
    }
    res.send({
        status:status,
        message:message,
        difference: diff,
    });
});

app.post("/multiply",(req,res)=>{
    let limit=1000000;
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let message="The product of given numbers";
    let mul = num1 * num2;
    let status="success";
    if(!num1 || !num2){
        res.send({
            status:"error",
            message:"Invalid data types",
        });
    }
    if(num1 < -limit || num2 < -limit || mul < -limit){
        message="Underflow";
        status="error";
    }
    if(num1 > limit || num2 > limit || mul > limit){
        message="Overflow";
        status="error";
    }
    res.send({
        status:status,
        message:message,
        result: mul,
    });
});

app.post("/divide",(req,res)=>{
    let limit=1000000;
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let message="The division of given numbers";
    let div = num1 / num2;
    let status="success";
    if(num2===0){
        res.send({
            status:"error",
            message:"Cannot divide by zero"
        });
    }
    if(!num1 || !num2){
        res.send({
            status:"error",
            message:"Invalid data types",
        });
    }
    
    if(num1 < -limit || num2 < -limit || div < -limit){
        message="Underflow";
        status="error";
    }
    if(num1 > limit || num2 > limit || div > limit){
        message="Overflow";
        status="error";
    }
    res.send({
        status:status,
        message:message,
        result: div,
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;