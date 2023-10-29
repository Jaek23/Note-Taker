const apiRouter = require('express').Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

apiRouter.get('/api/notes', (req, res) =>{
   const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf-8"));
   res.json(dbJson);
})

apiRouter.post('/api/notes', (req, res) =>{
    const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf-8"));
    const newTask = {
        title: req.body.title,
        text :req.body.text,
        id: uuidv4(),
    };
    dbJson.push(newTask);
    fs.writeFileSync("db/db.json", JSON.stringify(dbJson));
    res.json(dbJson);
})



module.exports = apiRouter;