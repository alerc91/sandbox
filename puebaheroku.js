var express = require("express");
var fs = require("fs"); // paquete(modulo) para trabajar con ficheros

var app = express();

app.get("/", (req,res)=>{
  fs.readFile('contacts.json','utf8',(err,data) =>{
    contacts.forEach((contact) =>{
      res.write("-"+contact.name+" ("+contact.phone+")");
    });
    res.end();
  });
});
app.listen(8084);
