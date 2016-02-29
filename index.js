var express = require("express");
var fs = require("fs"); // paquete(modulo) para trabajar con ficheros
var contacts = [];

var app = express();

app.get("/", (req,res)=>{
  fs.readFile('contacts.json','utf8',(err,content) =>{
    console.log("Data read");
    contacts = JSON.parse(content);
    contacts.forEach((contact) =>{
      res.write("-"+contact.name+" ("+contact.phone+")");
    });
    res.end();
  });
});
app.listen(process.env.PORT);
