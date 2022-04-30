  const botonClear = document.querySelector('#limpiaPantalla'); // variable que se utiliza para llamar al boton "clean" del html para usar en JS
  botonClear.addEventListener('click',limpiaPantalla); //evento agregado al boton
  
  let click = true; // se usa para hacer evento al dar click o no
  let colorInput = document.getElementById("colorHex"); //variable que recibe el color introducido por picker html
  let hexOutput = document.getElementById("hexa");//variable que muestra el color seleccionado

  colorInput.addEventListener("input",muestraColor); //funcion que al seleccionar color invoca muestraColor

  function muestraColor(){//funcion que selecciona color y muestra en pantalla cual color se seleccionó

    let colorInputValue = colorInput.value;
    hexOutput.value = colorInputValue;
    changeColor(colorInput.value);//invoca a la funcion cambia de color para pintar los cuadros del color seleccionado
  };


  let colorChoice = 'black'; //color por defecto para pintar los cuadros
  function changeColor(choice){ //funcion global que recibe la decision tomada por el usuario para cambiar colores
    colorChoice = choice; //cacha la variable
  }


  function limpiaPantalla(){ //funcion que al dar click en clean reinicia a valores default

    botonClear.onmouseover = actualizaTabla(); // al dar clic en boton actualiza la tabla 
    rango.value =16; //cambia la barra de rango a 16 default
    valorPantalla.innerHTML = 16; //muetra en pantalla el valor default 
    genera_tabla(); //genera la tabla default
  }

    const container = document.querySelector('#container'); //variable que llama al contenedor
    const divContainer = document.querySelector('#divContainer'); // variable que selecciona al div container
  
    divContainer.setAttribute("border","2"); // se le coloca un borde a al div el cual delimita la tabla
    divContainer.style.borderColor = "black"; //borde negro de la tabla 
    container.appendChild(divContainer);  //lo muestra en html 

    let valorPantalla = document.querySelector('#valorPantalla'); //crea una variable que se relaciona con el valor a mostrar en pantalla
    valorPantalla.innerHTML = rango.value; //recibe el valor default de rango
 

    rango.oninput = function(){ //cuando se da clic se realizan las lineas de código

    let rango = document.querySelector("input");//llama a la etiqueta input y toma el valor default
    let valorPantalla = document.querySelector('#valorPantalla'); //crea una variable que se relaciona con el valor a mostrar en pantalla
    valorPantalla.innerHTML = rango.value; //recibe el valor default de rango
 

    valorPantalla = rango.value; // recibe el valor de la barra 
    valorPantalla.innerHTML = rango.value; // muestra en pantalla el valor seleccionado 
    console.log(rango.value);
    console.log(typeof rango.value);
    console.log(typeof valorPantalla);
    rango.onmouseover= actualizaTabla(); //cuando se da clic en la barra le pasa el valor a la tabla para que se genera una tabla nueva con los valores introducidos
    rango.onmouseleave= genera_tabla2(valorPantalla);//al soltar el clic muestra en pantalla el valor seleccionado

    function genera_tabla2(valorPantalla) { //funcion que hace una tabla nueva 

  
      let cambiarBorde = document.querySelector("#quitarBordes"); // llama al boton quita bordes 
      cambiarBorde.onclick = function(){ // se le añade la funcion quitar bordes al dar clic 
        cambiaBorde(); // invoca a la funciones cambia borde
      }

      let colocarBordes = document.querySelector("#colocaBordes"); //llama al boton coloca bordes
      colocarBordes.onclick = function(){

        colocarBorde(); //incova a la funcion coloca bordes
      }

      let defaultValor =valorPantalla;  // toma el valor del rango para hacer las cuadriculas
      // Obtener la referencia del elemento body
      const body = document.getElementsByTagName("divContainer")[0];
    
      // Crea un elemento <table> y un elemento <tbody>
      const tabla   = document.createElement("table");
      const tblBody = document.createElement("tbody");
    
      // Crea las celdas
      for (let i = 0; i <defaultValor; i++) {
        // Crea las hileras de la tabla
        let hilera = document.createElement("tr");
        hilera.style.borderColor = 'F3F3F3','1';
    
  
        for (let j = 0; j <defaultValor; j++) {
          // Crea un elemento <td> y un nodo de texto, haz que el nodo de
          // texto sea el contenido de <td>, ubica el elemento <td> al final
          // de la hilera de la tabla

          let celda = document.createElement("td");
          celda.style['background-color']= 'white';
          celda.style.borderColor = 'F3F3F3','1';

          celda.addEventListener('mousemove',cambiarColor); // funcion que cambia de color los cuadros 
        
          function cambiarColor(){ 
            if(click){ //al detectar click 
              if(colorChoice === 'random'){ //pinta de color aleatorio
  
                celda.style['background-color']= `hsl(${Math.random() * 360}, 100%,50%)`;
    
              } else 
    
              celda.style['background-color']= colorChoice; // pinta del color seleccionado en los botones
            }

            }
           
          hilera.appendChild(celda);
        }
    
        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
      }
    
      // posiciona el <tbody> debajo del elemento <table>
      tabla.appendChild(tblBody);
      // appends <table> into <body>
      divContainer.appendChild(tabla);
      // modifica el atributo "border" de la tabla y lo fija a "2";
      tabla.setAttribute("border", "3");
      tabla.setAttribute("height",500);
      tabla.setAttribute("width",500);
      tabla.style.borderSpacing ="0px";

      function cambiaBorde(){ // funcion que quita bordes
        console.log("si sirvo");
        tabla.setAttribute("border","0");
      }
  
      function colocarBorde(){ //funcion que coloca bordes
        console.log("si sirvo tambien");
        tabla.setAttribute("border","3");
      }
    }
  
  }

    function genera_tabla() { //funcion que genera tabla con valore predeterminado de 16

    
      let cambiarBorde = document.querySelector("#quitarBordes");
      cambiarBorde.onclick = function(){
        cambiaBorde();
      }

      let colocarBordes = document.querySelector("#colocaBordes");
      colocarBordes.onclick = function(){

        colocarBorde();
      }

      let defaultValor = 16; 
      
    // Obtener la referencia del elemento body
    const body = document.getElementsByTagName("divContainer")[0];
  
    // Crea un elemento <table> y un elemento <tbody>
    const tabla   = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (let i = 0; i <defaultValor; i++) {
      // Crea las hileras de la tabla
      let hilera = document.createElement("tr");
      hilera.style.borderColor = 'F3F3F3','1';
  

      for (let j = 0; j <defaultValor; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        
        let celda = document.createElement("td");
        celda.style['background-color']= 'white';
        celda.style.borderColor = 'F3F3F3','1';
        
        celda.addEventListener('mousemove',cambiarColor); 
        
        function cambiarColor(){
          if(click){
            if(colorChoice === 'random'){

              celda.style['background-color']= `hsl(${Math.random() * 360}, 100%,50%)`;
  
            } else 
  
            celda.style['background-color']= colorChoice;

          };
        
          }

        hilera.appendChild(celda);
      }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    divContainer.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "3");
    tabla.setAttribute("height",500);
    tabla.setAttribute("width",500);
    tabla.style.borderSpacing ="0px";

    function cambiaBorde(){
      console.log("si sirvo");
      tabla.setAttribute("border","0");
    }

    function colocarBorde(){
      console.log("si sirvo tambien");
      tabla.setAttribute("border","3");
    }

  }


  function actualizaTabla(){ // funcion que actualiza tabla al mover el rango
    
    const table = document.querySelector("table");
    console.log(table);
    table.remove();
    
  }

  let coloring = document.querySelector("#ColoringOrNot"); //texto que muestra si esta coloreando o no
  coloring.value = "Mode: Coloring";

document.querySelector("body").addEventListener("click", () => {
click = !click;
if(click){
  coloring.value = "Mode: Coloring";
} else 
  coloring.value = "Mode: Not Coloring";
});

  genera_tabla(); //funciones que hace la tabla predeterminada