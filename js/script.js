/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */

//Chiedo all'utente il nome(e lo racchiudo in una variabile)
var userName = prompt("Inserisci il tuo nome");

//Verifico tramite il console.log che il foglio js sia connesso correttamente
console.log(userName);

//Chiedo all'utente il cognome
var userLastName = prompt("Inserisci il tuo cognome");
console.log(userLastName);

//Chiedo all'utente il colore preferito
var userFavColor = prompt("Inserisci il tuo colore preferito");
console.log(userFavColor);

//Recupero l'elemento html in cui inserire del testo
var passwordPlaceholder = document.getElementById("password");
console.log(passwordPlaceholder);

//Inserisco il testo nell'elemento html
passwordPlaceholder.innerText = userName + userLastName + userFavColor + "21";

/* bonus */
var userPlaceholder = document.getElementById("user");
userPlaceholder.innerText = userName + " " + userLastName;
