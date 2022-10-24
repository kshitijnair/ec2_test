const express = require('express')

let app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello from testing nodejs server 1. :D</h1>")
})

app.get("/todo", (req, res) => {
    res.send("<h1>ToDo List</h1><h3><ol><li>Get Groceries</li><li>Pet Doggo</li></ol></h3>")
})

let server = app.listen(8080, ()=> {
    console.log(`Node.js Server Test 1 running on ${server.address().address} on port ${server.address().port}`);
})