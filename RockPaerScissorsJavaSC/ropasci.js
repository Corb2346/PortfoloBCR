    let puntajeUsuariojuego = 0;
    let puntajeCompjuego = 0;

    const rock = document.getElementById("rock");
    rock.addEventListener('click',eventoCreado1);

    const paper = document.getElementById("paper");
    paper.addEventListener('click',eventoCreado2);

    const scissor = document.getElementById("scissor");
    scissor.addEventListener('click',eventoCreado3);

    const resultado = document.querySelector('#resultado');
    let puntajeUsuario = document.querySelector('#puntajeUsuario');
    let puntajeComp = document.querySelector('#puntajeCompu');

    


    function eventoCreado1(){
        Game("rock");
    }

    function eventoCreado2(){
        Game("paper");
    }

    function eventoCreado3(){
        Game("scissor");
    }
    function playGame(string1,string2){
    let compSelect = string1; 
    let userSelect = string2;
    
    if(compSelect ==="rock" && userSelect == "rock"){
    
    resultado.innerHTML= "!draw rock and rock¡" ;
    return 0;
    }
    else if( compSelect === "rock" && userSelect == "paper"){
    
    resultado.innerHTML = "You win paper beats rock!!";
        puntajeUsuariojuego++;
        puntajeUsuario.innerHTML = puntajeUsuariojuego;
    }
    
    else if(compSelect === "rock" && userSelect == "scissor"){
    
        resultado.innerHTML = "You loose rock beats scissors!!";
        puntajeCompjuego++;
        puntajeComp.innerHTML = puntajeCompjuego;
    return 2;
    }
    
    else if( compSelect === "paper" && userSelect == "paper"){
        resultado.innerHTML = "!draw paper and paper¡";
    return 0;
    
    }
    
    else if( compSelect === "paper" && userSelect == "rock"){
        resultado.innerHTML = "You loose paper beats rock!!";
        puntajeCompjuego++;
        puntajeComp.innerHTML = puntajeCompjuego;
    return 2;
    }
    
    else if( compSelect === "paper" && userSelect == "scissor"){
        resultado.innerHTML = "You Win scissors beats paper!!";
        puntajeUsuariojuego++;
        puntajeUsuario.innerHTML = puntajeUsuariojuego;

    return 1;
    }
    
    else if( compSelect === "scissor" && userSelect == "paper"){
        resultado.innerHTML = "!You loose scissors beats paper¡";
        puntajeCompjuego++;
        puntajeComp.innerHTML = puntajeCompjuego
    return 2;
    
    }
    
    else if( compSelect === "scissor" && userSelect == "rock"){
        resultado.innerHTML = "You win rock beats scissors!!";
        puntajeUsuariojuego++;
        puntajeUsuario.innerHTML = puntajeUsuariojuego;
    return 1;
    }
    
    else if( compSelect === "scissor" && userSelect == "scissor"){
        resultado.innerHTML = "Draw scissors and scissors!!";
    return 0;
    }
    
    else resultado.innerHTML = "Input invalid, please select: rock,paper or scissor";
    return 3; 
    }
    
    function computerPlay(){
        let opciones = ["rock","paper","scissor"];
        
        for(let i=1;i=1;i++){
        let opcionesLength = opciones.length;
        let randomOpcion = Math.floor(Math.random()*opcionesLength);
        
        if(randomOpcion == 0){
    
        return opciones[0];
        }
    
        else if(randomOpcion == 1){
    
        return opciones[1];
        }
    
        else if(randomOpcion == 2){
    
        return opciones[2];
        }
       }
     }

        function Game(userChoise){
    
        let userSelection = userChoise;
        let compSelection = computerPlay();
        playGame(compSelection,userSelection);
    }