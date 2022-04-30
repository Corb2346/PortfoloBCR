let display = document.querySelector("#display");// constante que recibe el display del html y lo pasa a js
display.textContent = "0";

let clearBoton = document.querySelector("#clearButton");
let puntoDecimal = document.querySelector("#puntoDecimal");
let deleteButton = document.querySelector("#delete");


let number1 = 0;
let number2 = 0;
let resultado = 0; 
let operationStatus = true; 
let operacionChoice = "";
let choice = 0;

document.addEventListener('keydown',tecladoInput);

function tecladoInput(e){


     let eventoTeclado = e.key;

     switch(eventoTeclado){
          case "1": 
               muestraPantalla("1");
          break; 
     
          case "2": 
          muestraPantalla("2");
          break; 

          case "3": 
          muestraPantalla("3");
          break; 

          case "4": 
          muestraPantalla("4");
          break; 

          case "5": 
          muestraPantalla("5");
          break; 

          case "6": 
          muestraPantalla("6");
          break; 

          case "7": 
          muestraPantalla("7");
          break; 

          case "8": 
          muestraPantalla("8");
          break; 

          case "9": 
          muestraPantalla("9");
          break; 

          case "0": 
          muestraPantalla("0");
          break; 

          case "-": 
          operadorChoice('-');
          break;

          case "+": 
          operadorChoice('+');
          break; 

          case "*": 
          operadorChoice('x');
          break; 

          case "/": 
          operadorChoice('/');
          break; 

          case "Enter":
               operatorIgual();
          break;

          default: null;
          break;
     }
}

clearBoton.addEventListener("click",clear)
     
function clear(){
     number1 = 0; 
     number2 = 0;
     resultado = 0; 
     operacionChoice = "";
     choiceOperator = "";
     choiceOperatorJs = "";
     choiceOperatorFunc = "";
     display.textContent = 0; 

}

deleteButton.addEventListener('click',deleteNumber);
function deleteNumber(){

     let moveNumber = display.textContent.slice(0,-1);
     display.textContent = moveNumber;

}    

function muestraPantalla(choice){ //funcion que recibe los numeros una vez que se selecciona algun boton con número

     if(display.textContent === "0" || operationStatus === true ){ //verifica si el numero mostrado en pantalla es 0 o si hay un signo de operacion 
     display.textContent = choice; // de ser cierto muestra en pantalla el primer numero seleccionado
     }
     else if(choice === '.' && !display.textContent.includes('.')){ //cuando ya no es sero 
     display.textContent += choice; //concatena los numeros presionados 
     number1 = display.textContent;
     }  else if(choice !== '.'){
          display.textContent += choice; //concatena los numeros presionados 
          number1 = display.textContent;
     }
     else {
          null;
     }
     operationStatus = false; 
     console.log(display.textContent.length);

     if(display.textContent.length > 10){
          moveNumber = display.textContent.slice(0,11);
          display.textContent = moveNumber;
     } else 
    null;
     
}



function operadorChoice(choiceOperator){//funcion que recibe el operador seleccionado
   
     number1 = parseFloat(display.textContent);//variable que toma los datos del display y almacena en variable

     console.log(number1);
     console.log(typeof number1);
     console.log(choiceOperator);
     console.log(typeof choiceOperator);
     console.log(number1);
     console.log(typeof number1);

     let choiceOperatorJs = "";
     console.log(choiceOperatorJs);
     console.log(typeof choiceOperatorJs);

     if(choiceOperator === '+'){
          display.textContent = choiceOperator;//muestra en pantalla el operador presionado*/
          choiceOperatorJs = '+';
          console.log(number1);
          console.log(choiceOperatorJs);
          operator(number1,choiceOperatorJs);//invoca a la funcion operador y le pasa el numeor1 y el operador seleccionado*/
     }

     else if(choiceOperator === '-'){
          display.textContent = choiceOperator;//muestra en pantalla el operador presionado*/
          choiceOperatorJs = '-';
          console.log(number1);
          console.log(choiceOperatorJs);
          operator(number1,choiceOperatorJs);//invoca a la funcion operador y le pasa el numeor1 y el operador seleccionado*/
     }

     else if(choiceOperator === 'x'){
          display.textContent = choiceOperator;//muestra en pantalla el operador presionado*/
          choiceOperatorJs = 'x';
          console.log(number1);
          console.log(choiceOperatorJs);
          operator(number1,choiceOperatorJs);//invoca a la funcion operador y le pasa el numeor1 y el operador seleccionado*/
     }


     else if(choiceOperator === '/'){
          display.textContent = choiceOperator;//muestra en pantalla el operador presionado*/
          choiceOperatorJs = '/';
          console.log(number1);
          console.log(choiceOperatorJs);
          operator(number1,choiceOperatorJs);//invoca a la funcion operador y le pasa el numeor1 y el operador seleccionado*/
     }

     else if(choiceOperator === 'exp'){
          display.textContent = choiceOperator;//muestra en pantalla el operador presionado*/
          choiceOperatorJs = 'exp';
          console.log(number1);
          console.log(choiceOperatorJs);
          operator(number1,choiceOperatorJs);//invoca a la funcion operador y le pasa el numeor1 y el operador seleccionado*/
     }

}

function operator(number1,choiceOperatorJs){
     operationStatus = true;

     number2 = 0;
     let choiceOperatorFunc = choiceOperatorJs; 
     operadorIgual.addEventListener("click",operatorIgual);
     
     function operatorIgual(){

          
          let number2String = display.textContent;
          console.log(number2String);
          console.log(typeof number2String);
          let number2Clean = number2String.replace(/[-]/gi,'').replace(/x/g,'').replace(/[/]/g,'')
          console.log(number2Clean);
          console.log(typeof number2Clean);
          number2 = parseFloat(number2Clean); 
          console.log(number2);
          console.log(typeof number2);

          if(choiceOperatorFunc === "+"){

               resultado = number1 + number2;
               console.log(resultado);
               display.textContent = Number(resultado.toFixed(3));
               number1=0; 
               resultado = 0; 
               choiceOperatorJs = "";
               console.log(number1);
          }

          else if(choiceOperatorFunc === "-"){
               resultado = number1 - number2;
               console.log(resultado);
               display.textContent = Number(resultado.toFixed(3));
               number1=0;
               resultado = 0; 
               choiceOperatorJs = "";
          }
          else if(choiceOperatorFunc === "x"){
               resultado = number1 * number2;
               console.log(resultado);
               display.textContent = Number(resultado.toFixed(3));
               number1= 1;
               resultado = 0; 
               choiceOperatorJs = "";
               choiceOperatorFunc = "";
          }

          else if(choiceOperatorFunc === "exp"){
               resultado = number1 ** number2;
               console.log(resultado);
               display.textContent = Number(resultado.toFixed(3));
               number1= 1;
               resultado = 0; 
               choiceOperatorJs = "";
               choiceOperatorFunc = "";
          }

          else if(choiceOperatorFunc === "/"){
               resultado = number1 / number2;
               console.log(resultado);
               display.textContent = Number(resultado.toFixed(3));
               number1 = resultado;
               resultado = 0;
               choiceOperatorFunc = "";
               choiceOperatorJs = "";
          }

          
          
          
     }

     
  

}



