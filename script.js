let BtnRandom = document.getElementById("btnRandom");

let BtnReset = document.getElementById("btnReset");

let BtnRed = document.getElementById("btnRed");

let BtnBlue = document.getElementById("btnBlue");

let BtnGreen = document.getElementById("btnGreen");

function BtnRandomHandler (){
    let colors = ["magenta", "darkblue", "darkgreen"]
    let number = Math.floor(Math.random()*colors.length );

    let Body = document.querySelector('body');
    Body.style.backgroundColor = colors[number];
    console.log(colors[number]);
}

function BtnResetHandler (){
    let colors = ["white"]
    let Body = document.querySelector('body');
    Body.style.backgroundColor = colors;
}

function BtnRedHandler (){
    let Body = document.querySelector('body');
    Body.style.backgroundColor = 'magenta';
}

function BtnBlueHandler (){
    let Body = document.querySelector('body');
    Body.style.backgroundColor = 'darkblue';
}

function BtnGreenHandler (){
    let Body = document.querySelector('body');
    Body.style.backgroundColor = 'darkgreen';
}

BtnRandom.addEventListener('click', BtnRandomHandler);

BtnReset.addEventListener('click', BtnResetHandler);

BtnRed.addEventListener('click', BtnRedHandler);

BtnBlue.addEventListener('click', BtnBlueHandler);

BtnGreen.addEventListener('click', BtnGreenHandler);