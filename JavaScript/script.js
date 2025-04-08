//Commentarios
/* commentario
de cartas lines*/

/* syntax to create a variable

var nombreVariable; //No usar
let nombreVariable; 👌
const PI=3.1416; //constant

Nombrar variable (nombre descriptivo)
Pueder contener letters, numeros y gulones (-_)
let nombre01_28;
Cannot start with a number.
let 09nombre; ❌
Cannot give it function names.
let alert;
let for; ❌

let nombreAlumno; (camel case);

*/

var nombre="Antonio";
let apellido="Mesa";

console.log (nombre);
console.log (apellido);

var nombre="Luna";
console.log(nombre);

//TIPOS DE DATOS EN JAVASCRIPT

/*

number--> numerico
let numero = 2;
let numero2 = 3.1416;
string-->cadena de caracteres
let cadena = 'cadena de caracteres';
let cadena2 = "cadena de caracteres";
boolean-->true or false
let boolean = true;
null-->sin valor

undefined-->sin definir
let sinDefinir;
object-->objeto

let alumno = {
   "name":"luna"
   "apellido":"Mesa"
   "hobby":"jugar"
   }

*/
let numero = 2;
console.log("El valor es"+ typeof numero);

let boolean=true;
console.log(typeof boolean);

    let cadena2 = "cadena de caracteres";
    console.log(cadena2);

    let alumno = {
        "name":"luna",
        "apellido":"Meta"
        
        }

        console.log(typeof alumno);



    /**
     * asignacion=asigna un valor una variable
     * += suma y asigna
     * -= resta y asigna
     * *= multiplicacion asigna
     * /=divide y asigna
     * %= resto de division y asigna
     * Aritmeticos
     * suma +
     * resta -
     * multiplicacion *
     * division / 
     * modulo % resto de la division
     */



    let numero1 = 18;
    let numero2 = 5;

    console.log(numero1 + numero2);
    console.log(numero1 / numero2);
    console.log(numero1 % numero2);
    console.log(numero1 * numero2);


    /* operadores de logicos o de comparacion

    igual ==
    igual estricto === 
    distincto !=
    distincto estricto !==
    mayor que >
    mayor igual que >=
    menor que <
    menor igual que <=

    */


    console.log(numero1 == numero2);
    numero1 = 10;
    cadena = '10';
    console.log (numero1 == cadena);
    console.log (numero1 === cadena);


    /*

    Unir dos string
    syntax

    "Hola" + "Mundo"

    "Hola Mundo"

    */ 

    /* operador Ternario

   Se necesitan tres operadores
   es un operador condicional

   condicion ? valor1 : valor2


   */


   console.log(numero1 === numero2 ? "son iguales" : "son differentes");

   /* Condicionales

   syntax

   if... else

   if(condicion) {
      bloc de executat
    } else {
      bloc de cod
    }
Valores falsos:
-false
-undefined
-null
-0
-NaN
-' ' empty string

  */


/*
  switch...case

  syntax:

  switch (expression) {
    case valor1:
        block;
        break;
    case valor2:
        block;
        break;
    default:
        block;
        break;  
    }

*/

nombre = 'Martin';

 switch (nombre){

     case 'Luana' :
        console.log("Hola soy Luana");
        break;
     case 'Antonio' :
        console.log("Hola soy Antonio");
        break;
     default :
      console.log("Yo soy...?");
 }

 /* Loops


  for syntax

  for (let i=0; i<10; i++) {
      Repite 10 veces este codigo
    }

  while syntax

  while (condicion) {
    block of instructions
    }

  do...while syntax

   do {
    bloc de instructiuni
   } while(condicion);

*/


/* Funciones */

/*
 syntax:
  
  function nombreFunction (parametros Optionales) {
    bloc de instructiuni
    return opcional si devuelve valor
  }

 */ 


  function operacionArtimetica (operador, valor1, valor2) {
      if (operador==='*') 
        return valor1 * valor2;
       else if(operador==='+')
                return valor1 + valor2;
       else if(operador==='-')
               return valor1 - valor2;
       else if(operador==='/')
               return valor1 / valor2;
      
  }


  let resultato = 0;
  resultado = operacionArtimetica ('*', numero1, numero2);
  console.log("el resultado es " + resultado);

  resultado = operacionArtimetica ('+', numero1, numero2);
  console.log("el resultado es " + resultado);

  resultado = operacionArtimetica ('-', numero1, numero2);
  console.log("el resultado es " + resultado);

  resultado = operacionArtimetica ('/', numero1, numero2);
  console.log("el resultado es " + resultado);

  /* Arrays/ lists 

   let frutas = ["manzana", "platano", "naranja"];

   */

   let frutas = ["manzana", "platano", "naranja"];
   console.log(typeof frutas);

  
   
   console.log(frutas[0]);
   frutas.forEach(element =>  {
     console.log(element);
   })

  /* Afisarea fiecarui element al listei */
 
    frutas.push("Kiwi");
    console.log(frutas);

    frutas.pop();
    console.log(frutas);

    frutas.unshift("Kiwi" , "melon");
    console.log(frutas);

    console.log(frutas.length);


    /* programacion orientada a objetos */

    /* Crear un dato object */ 

    let persona = new Object();
    let coche = {};

     persona = { 
      "nombre" : "Luna" ,
      "edad" : 4 , 
      "profession" : "Ser Feliz" ,
      "reir" : function() {
        console.log("Me estoy riendo 😂😂😂");
      }
     }

     console.log(persona);

     /* access the data of the object */ 
     
     console.log(persona.nombre);
     console.log(persona["edad"]);

     /* adding properties to an object */ 

     persona.pais = "Espana";
     console.log(persona);

     persona.reir();

     /* Classes 

      Los classes son como fabrica de objectos
      fabrica de vehiculos--> coche, moto, bicicleta, camion...
      
      syntax:
       class NombreClase {
        constructor(parametros){
         this.parametro1 = parametro1;
         this.parametro2 = parametro2;
         ....
         }
       
      }
    */

      class Robot {
        constructor(nombre, color) {
          this.nombre = nombre;
          this.color = color;
        }
      
   hablar() {
     console.log(`Hola! Soy ${this.nombre}, tu robot amigo. 🤖`)
         }


    mover() {
      console.log(`mi color es ${this.color} esta movlendosa...🚀🚀`);
    }
      }

   let robot1 = new Robot("Atlbot", "negro");
   robot1.hablar();
   robot1.mover();

   let robot2 = new Robot("Skyros", "rojo");
   robot2.hablar();
   robot2.mover();
   
   /* Herencia de POO */ 

   class RobotBailarin extends Robot {
      bailar() {
        console.log(`${this.nombre} esta bailando 💃🕺👯🪩🤖`);
      }
   }

   let robotBailarin  =  new RobotBailarin ("Dancerbot", "green");

   robotBailarin.hablar();
   robotBailarin.bailar();
  // robot1.bailar(); //not a function

  /* functiones callback 
  */

  function saludar(nombre) {
    console.log(`Hola ${nombre}`);
  }

  function ingresarNombre(callback){
    let nombre = prompt("Escribe tu nombre:");
      
      callback(nombre); 
  }
   
   ingresarNombre(saludar);