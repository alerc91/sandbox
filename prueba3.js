var contacts = [
                  {name : "pablo", phone : "121234"},
                  {name : "pepe", phone : "123424"}
                ];

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
