let inputText = document.getElementById("inputText"); // llama las varibles del html a js para utilizarse
let encriptarButton = document.getElementById("encriptarButton");
let desencriptarButton = document.getElementById("desencriptarButton");
let imageGuy = document.getElementById("imageGuy");
let displaySubtexto = document.getElementById("displaySubtexto");
let displayTexto = document.getElementById("displayTexto");
let copiarTexto = document.getElementById("copiarTexto");
let whiteRectangle = document.getElementById("whiteRectangle");
let displayText = document.getElementById("displayText");
let defaultValue = "";

inputText.addEventListener("click",ingresarTexto);  // eventos al presionar los botones y al introducir texto en pantalla
encriptarButton.addEventListener("click",encriptarFuncion);
desencriptarButton.addEventListener("click",desencriptarFuncion);
copiarTexto.addEventListener("click",copyText);

function copyText(){
    displayText.select();
    document.execCommand("copy");
}

function encriptarFuncion(){ //funcion que encripta el mensaje en pantallaa

    if(inputText.value === "" || inputText.value === "Ingresa tu mensaje Aqui"){
        displayTexto.textContent= "Ningun mensaje Encontrado";
        displaySubtexto.textContent  = "Ingresa texto en pantalla";
        inputText.value = "Ingresa tu mensaje Aqui";
    } else  if(screen.width > 768){
    let fraseRecibida = inputText.value;
    encriptar(fraseRecibida);
    imageGuy.remove();
    whiteRectangle.style.flex;
    whiteRectangle.style.justifyContent = "space-around";
    copiarTexto.style.visibility = "visible";
    displayText.style.visibility = "visible";
    displayText.style.height = "400px";
    }
     else if(screen.width <= 768 ){
        let fraseRecibida = inputText.value;
        encriptar(fraseRecibida);
        displayText.style.height = "125px";
        document.getElementById("whiteRectangle").style.height = "380px";
        displayTexto.style.height = "70px";
        copiarTexto.style.width = "250px";
        copiarTexto.style.marginBottom = "50px";
        copiarTexto.style.visibility = "visible";
        displayText.style.visibility = "visible";
    }

    else if(screen.width <= 500){
        let fraseRecibida = inputText.value;
        encriptar(fraseRecibida);
        displayText.style.height = "50px";
        displaySubtexto.style.height = "50px";
        document.getElementById("whiteRectangle").style.height = "400px";
        displayTexto.style.height = "70px";
        copiarTexto.style.width = "250px";
        copiarTexto.style.marginBottom = "50px";
        displaySubtexto.style.height = "50px"; 
        copiarTexto.style.visibility = "visible";
        displayText.style.visibility = "visible";
    }
}

function ingresarTexto(){
    document.getElementById("inputText").value =defaultValue;
}

function desencriptarFuncion(){

    if(inputText.value === "" || inputText.value === "Ingresa tu mensaje Aqui"){
        displayTexto.textContent= "Ningun mensaje Encontrado";
        displaySubtexto.textContent  = "Ingresa texto en pantalla";
        inputText.value = "Ingresa tu mensaje Aqui";
    } else if(displaySubtexto.textContent === "Ingresa texto en pantalla" || displaySubtexto.textContent === "Ingresa el texto que desees encriptar o desencriptar."){
    let fraseEncriptada = inputText.value;
    console.log(fraseEncriptada);
    desencriptar(fraseEncriptada);
    } else if(screen.width >= 768){
        let fraseEncriptada = inputText.value;
    console.log(fraseEncriptada);
    desencriptar(fraseEncriptada);
    imageGuy.remove();
    whiteRectangle.style.flex;
    whiteRectangle.style.justifyContent = "space-around";
    copiarTexto.style.visibility = "visible";
    displayText.style.visibility = "visible";
    displayText.style.height = "400px";
    }

    else if(screen.width <= 768 && screen.width >= 501){
        let fraseEncriptada = inputText.value;
        console.log(fraseEncriptada);
        desencriptar(fraseEncriptada);
        displayText.style.height = "125px";
        document.getElementById("whiteRectangle").style.height = "450px";
        displayTexto.style.height = "70px";
        copiarTexto.style.width = "450px";
        copiarTexto.style.marginBottom = "100px";
        copiarTexto.style.visibility = "visible";
        displayText.style.visibility = "visible";
        displayText.style.height = "300px";
        displaySubtexto.style.height = "200px";

    }
    else if(screen.width <= 500){

        let fraseEncriptada = inputText.value;
        console.log(fraseEncriptada);
        desencriptar(fraseEncriptada);
        document.getElementById("whiteRectangle").style.height = "550px";
        copiarTexto.style.width = "250px";
        copiarTexto.style.marginBottom = "50px";
        copiarTexto.style.visibility = "visible";
        displayText.style.visibility = "visible";
        displayText.style.height = "200px";
    }

};

function encriptar(fraseRecibida){


let fraseRecibidaMain = fraseRecibida;
let palabraFixed =  fraseRecibidaMain.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
let contador = 0;
let tomaLetra = "";
let arrayEncriptada = new Array();
let palabraEncriptada = "";

do{

    tomaLetra = palabraFixed.charAt(contador);
    console.log(tomaLetra + contador);
    
    if(tomaLetra === "a"){
        tomaLetra = "ai";
        arrayEncriptada[contador] = tomaLetra;
        contador++;

    } else if(tomaLetra === "e" ){
        tomaLetra = "enter";
        arrayEncriptada[contador] = tomaLetra;
        contador++;

    } else if(tomaLetra === "i" ){
        tomaLetra = "imes";
        arrayEncriptada[contador] = tomaLetra;
        contador++;

    } else if(tomaLetra === "o" ){
        tomaLetra = "ober";
        arrayEncriptada[contador] = tomaLetra;
        contador++;

    } else if(tomaLetra === "u" ){
            tomaLetra = "ufat";
            arrayEncriptada[contador] = tomaLetra;
            contador++;

    } else {
        arrayEncriptada[contador] = tomaLetra;
        contador++; 
    }


}while(contador < palabraFixed.length);

palabraEncriptada = arrayEncriptada.toString();
let palabraEncriptadaFixed = palabraEncriptada.replace(/,/g, '');

console.log(arrayEncriptada);
console.log(palabraEncriptada );
console.log(palabraEncriptadaFixed );
displayTexto.textContent= "Mensaje encriptado:";
displayText.textContent = palabraEncriptadaFixed;
inputText.value = "Ingresa tu mensaje Aqui";
};


function desencriptar(fraseEncriptada){

contador =0;
tomaLetra = "";
let arrayEncriptada = new Array();
let contadorAlmacenador =0;

do{

tomaLetra=fraseEncriptada.charAt(contador);
console.log(tomaLetra + contador);

if(tomaLetra === "a"){

    tomaLetra = "a";
    arrayEncriptada[contadorAlmacenador] = tomaLetra;
    contador = contador + 2;
    contadorAlmacenador++;

} else if(tomaLetra === "e"){

    tomaLetra = "e";
    arrayEncriptada[contadorAlmacenador] = tomaLetra;
    contadorAlmacenador++;
    contador = contador + 5;

} else if(tomaLetra === "i"){

    tomaLetra = "i";
    arrayEncriptada[contadorAlmacenador] = tomaLetra;
    contadorAlmacenador++;
    contador = contador + 4;

} else if(tomaLetra === "o"){

    tomaLetra = "o";
    arrayEncriptada[contadorAlmacenador] = tomaLetra;
    contadorAlmacenador++;
    contador = contador + 4;

} else if(tomaLetra === "u"){

    tomaLetra = "u";
    arrayEncriptada[contadorAlmacenador] = tomaLetra;
    contadorAlmacenador++;
    contador = contador + 4;
} else {
    arrayEncriptada[contadorAlmacenador] = tomaLetra;
    contador++;
    contadorAlmacenador++;
}

}while(contador<fraseEncriptada.length);

console.log(arrayEncriptada);

let stringEncriptado = arrayEncriptada.toString();
console.log(arrayEncriptada);

let palabraDesencriptada = stringEncriptado.replace(/,/g, '');
console.log(palabraDesencriptada);


displayTexto.textContent= "Mensaje Desencriptado:";
displayText.textContent = palabraDesencriptada;
inputText.value = "Ingresa tu mensaje Aqui";
};
