

function login() {
    
var user, password
    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasena").value;

    if(user == "Diego" && password == "1234"){
        alert("Login Erfolgreich!");
       
    

    } else {
        alert("¡Falsche Daten!")
    }
}
