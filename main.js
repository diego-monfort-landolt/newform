

function login() {
    
var user, password
    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasena").value;




    if(user == "Diego" && password == "1234"){
        alert("👌 Successfully logged in!");
    } else {
        alert("¡ Please Repeat! 💥 ")
    }
}
const text = document.querySelector('.form-control');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";

}
let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;

    }

}

function complete(){
    clearInterval(timer);
    timer = null;
}



