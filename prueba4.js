var fs = require("fs"); // paquete(modulo) para trabajar con ficheros


//leemos el archivo (readFileSync: de manera asincrona bloquea el código)
var data = fs.readFileSync('contacts.json','utf8');

//cargamos el archivo en la variable
var contacts = JSON.parse(data);

//contactos en una línea

var contactsAux = contacts[0].name+" ("+contacts[0].phone+")";

for (var i = 1; i < contacts.length; i++) {
  contactsAux =  contactsAux+", "+contacts[i].name+" ("+contacts[i].phone+")";
}
console.log("Contactos: "+contactsAux);

//cada contacto en una línea

function printContact(contact){
  console.log("-"+contact.name+" ("+contact.phone+")");
}

contacts.forEach(printContact);
//El for es igual que el .forEach, porque ejecuta la funcionpor cada elemento del array contacts
/*
for(var i = 0; i < contacts.length; i++){
  var contact = contacts[i];
  printContact(contact)
}
*/

console.log("_____________________\n");

// no hace falta hacer una funcion con nombre, se crea directamente la funcion
contacts.forEach(function (contact){
  console.log("-"+contact.name+" ("+contact.phone+")");
});

console.log("_____________________\n");

//con => no hace falta poner function
contacts.forEach((contact) =>{
  console.log("-"+contact.name+" ("+contact.phone+")");
});

console.log("_____________________\n");

// Si ponemos la lectura de forma asincrona(en diferencia al readFileSync sincrono), tenemos que mover el código dentro porque si no la
// la variable la cargaría vacía, de esta forma no se para el código y pondemos hacer el código en
// paralelo
fs.readFile('contacts.json','utf8',(err,data) =>{
  contacts.forEach((contact) =>{
    console.log("-"+contact.name+" ("+contact.phone+")");
  });
});
