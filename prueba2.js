var contacts = ["pablo", "pepe", "luis"];

//contactos en una línea

console.log("Array contacts --> "+contacts);

var contactsAux = contacts[0];

for (var i = 1; i < contacts.length; i++) {
  contactsAux =  contactsAux+", "+contacts[i];
}
console.log("Contactos: "+contactsAux);

//cada contacto en una línea

for(var i = 0; i < contacts.length; i++){
  console.log("-"+contacts[i]);
}
