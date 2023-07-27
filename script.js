//ANTES DE EMPEZAR:
//Copia este código base completo en un nuevo archivo llamado desafio.js

//-----------------------------------------------------------------------//

//JUGADORES:
// NO MODIFICAR LOS NOMBRES DE ESTOS OBJETOS
// (El test automático les cambia los valores para probar que el resto 
// de la lógica funcione bien)

const jugadorUno = {
    nombre: "Marce",
    habilidades: {
      ataque1: 700,
      velocidad: 300,
      vida: 0,
      magia: 0,
    },
    articulos: ["espada", "escudo", "varita","pene duro","tetilla de acero"],
  };
  
  const jugadorDos = {
    nombre: "Flor",
    habilidades: {
      ataque1: 73,
      velocidad: 30,
      vida: 80,
      magia: 100,
    },
    articulos: ["escudo", "varita", "capa", "pocion"],
  };
  


  //-----------------------------------------------------------------------//
  
  //PUNTOS INICIALES DEL JUEGO:
  //Estas variables servirán para almacenar los puntos ganados por cada jugador.
  //Cada vez que un jugador gana en una habilidad determinada se deberá
  //sumar 1 punto en el contador correspondiente:
  let contadorPuntosJug1 = 0;
  let contadorPuntosJug2 = 0;
  
  //Ganador:
  let JugadorGanador;

  
  ataque()
  velocidad()
  vida()
  magia()
  cantidad()
  ganador()
  
  

 

  function ataque(){
    if (jugadorUno.habilidades.ataque1>jugadorDos.habilidades.ataque1) {
        contadorPuntosJug1++
      }else{
        if (jugadorUno.habilidades.ataque1<jugadorDos.habilidades.ataque1) {
            contadorPuntosJug2++
        }
        else{
            contadorPuntosJug1++
            contadorPuntosJug2++
        }
      }
  }

  function velocidad(){
    if (jugadorUno.habilidades.velocidad>jugadorDos.habilidades.velocidad) {
        contadorPuntosJug1++
      }else{
        if (jugadorUno.habilidades.velocidad<jugadorDos.habilidades.velocidad) {
            contadorPuntosJug2++
        }
        else{
            contadorPuntosJug1++
            contadorPuntosJug2++
        }
      }
  }
  function vida(){
    if (jugadorUno.habilidades.vida>jugadorDos.habilidades.vida) {
        contadorPuntosJug1++
      }else{
        if (jugadorUno.habilidades.vida<jugadorDos.habilidades.vida) {
            contadorPuntosJug2++
        }
        else{
            contadorPuntosJug1++
            contadorPuntosJug2++
        }
      }
  }
  function magia(){
    if (jugadorUno.habilidades.magia>jugadorDos.habilidades.magia) {
        contadorPuntosJug1++
      }else{
        if (jugadorUno.habilidades.magia<jugadorDos.habilidades.magia) {
            contadorPuntosJug2++
        }
        else{
            contadorPuntosJug1++
            contadorPuntosJug2++
        }
      }
  }

  function cantidad(){
    if (jugadorUno.articulos.length>jugadorDos.articulos.length) {
        contadorPuntosJug1++
      }else{
        if (jugadorUno.articulos.length<jugadorDos.articulos.length) {
            contadorPuntosJug2++
        }
        else{
            contadorPuntosJug1++
            contadorPuntosJug2++
        }
      }
  }



  function ganador(){
   
    if (contadorPuntosJug1>contadorPuntosJug2) {
        JugadorGanador=jugadorUno.nombre +" "+ contadorPuntosJug1
    }else if (contadorPuntosJug1<contadorPuntosJug2) {
        JugadorGanador=jugadorDos.nombre+" "+ contadorPuntosJug2
    }else{
        JugadorGanador="empate"
    }

    console.log("ganador es: "+JugadorGanador)
  }


  
  //-----------------------------------------------------------------------//
  
  //COMPARACIÓN POR PODER DE ATAQUE
  
  //La indicación ++ luego de la variable contadorPuntosJug suma 1 punto al
  //contador. Según la condición que se cumpla, se irán sumando los puntos.
  
  //EJEMPLO ESTRUCTURA DE COMPARACIÓN
  /* if (habilidadACompararJugador1 > habilidadACompararJugador2) {
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
  } else if (condiciónCasoContrario) {
    contadorPuntosJug2++;
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  } */
  
  // (Escribir debajo el código que te permita generar esta comparación)
  
  //-----------------------------------------------------------------------//
  
  //COMPARACIÓN POR VELOCIDAD:
  //(Escribir debajo el código que te permita generar esta comparación)
  
  //-----------------------------------------------------------------------//
  
  //COMPARACIÓN POR NIVEL DE VIDA:
  //(Escribir debajo el código que te permita generar esta comparación)
  
  //-----------------------------------------------------------------------//
  
  //COMPARACIÓN POR MAGIA:
  //(Escribir debajo el código que te permita generar esta comparación)
  
  //-----------------------------------------------------------------------//
  
  //COMPARACIÓN POR CANTIDAD DE ARTÍCULOS
  //(Escribir debajo el código que te permita generar esta comparación)
  
  //-----------------------------------------------------------------------//
  
  //DEFINIENDO EL GANADOR DE LA PARTIDA
  //En este espacio deberás generar la comparación final de puntos
  //que determine al ganador. Mostrar en la terminal el nombre del jugador que ganó la partida
  
  // ejemplo:
  // var resultado = {
  //  [nombreDeJug1]: contadorPuntosJug1,
  //  [nombreDeJug2]: contadorPuntosJug2,
  //  ganador: nombreDeJug1
  // }
  // console.log(resultado)
  //-----------------------------------------------------------------------//