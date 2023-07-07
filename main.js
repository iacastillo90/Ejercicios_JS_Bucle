//Ejercicio 1 -- Realizar un programa que permita el ingreso de un número y muestre su tabla de
//multiplicar (os primeros 10 múltiplos). 
console.log("Ejercicio 1")
let numeroMultiplicar = (prompt("Ingrese un número:"));

console.log("Tabla de multiplicar del", numeroMultiplicar + ":" );

for (let i = 1; i <= 10; i++) {
  let resultado = numeroMultiplicar * i;
  console.log(numeroMultiplicar, "x", i, "=", resultado );
}


//Ejercicio 2 --Realizar un programa que permita el ingreso de números los cuales se tienen que ir
//acumulando. El ingreso de datos terminará cuando el usuario ingrese un valor 0.
console.log ( "Ejercicio 2")
function acumularNumeros() {
    let numero;
    let suma = 0;
    
    while (true) { 
      numero = Number(prompt("Ingrese un número (0 para terminar)"));   
      if (numero == 0) {     
        break;
      }
      else{
        suma = suma + numero;
        console.log(suma );

      } 
     
     }  
      ultimoNumero = numero
    return suma;
  }
 acumularNumeros()


//Ejercicio 3 --Guarda el número final del ejercicio N°2 en una variable, el mismo deberá estar en un
//rango entre 1 - 100. La persona deberá poder ingresar números hasta adivinar el valor
//guardado en dicha variable. Si el valor ingresado es mayor al número secreto, avisarle
//al usuario, lo mismo si el valor es menor. Así sucesivamente hasta que el usuario
//adivine el número secreto. Por último mostrar un mensaje de felicitaciones y decirle en
//cuantos intentos lo ha realizado.
console.log("Ejercicio 3")
console.log(`El último número ingresado del Ejercicio 2 fue ${ultimoNumero}`);

let numeroAIngresar = prompt("Ingrese un número para adivinar");
let contador = 1;

if (numeroAIngresar == null || numeroAIngresar == " ") {
  alert("No ingresaste un número");
} else {
  while (numeroAIngresar != ultimoNumero && numeroAIngresar >= 1 && numeroAIngresar <= 100) {
    contador++;
    if (numeroAIngresar > ultimoNumero) {
      alert("Es más grande");
    } else {
      alert("Es más chico");
    }
    numeroAIngresar =prompt("Ingrese un número para adivinar");
  }
  alert(`Ganaste en ${contador} intentos`);
}

console.log(`Lo adivinaste en ${contador} intentos` );


//Ejercicio 4 --Realizar un programa que reciba un número y muestre de alguna forma todos sus
//divisores.

function mostrarDivisores(numero) {
    let divisores = [];
    for (let i = 1; i <= numero; i++) {
  
      if (numero % i == 0) {
        divisores.push(i);
      }
    }
  
    if (divisores.length >= 4) {
      console.log("Los primeros 4 divisores de " + numero + " son: " + divisores.slice(0, 4) );
    } else {
      console.log("El número " + numero + " tiene menos de 4 divisores.");
    }
    
  }

//Ejercicio 5 --Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre
// un mensaje por consola con cada uno de los elementos del array.
console.log("Ejercicio 5")
function mostrarArray(array5Mensajes) {
    for (let i = 0; i < array5Mensajes.length; i++) {
      
      console.log("El elemento en la posición " + i + " es: " + array5Mensajes[i]  );
    }
  }
  
  let array5Mensajes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  mostrarArray(array5Mensajes);



//Ejercicio 6 --Dado un array de 10 números, realizar un programa que muestre por consola el doble
//de cada uno de los elementos.
console.log(" Ejercicio 6")
const numeros = [ 18,4,5,9,27,6,7,22,35,5 ]

function mostrarDobles(listaNumeros){
    const dobles = []
    for( const numero of listaNumeros ){
        dobles.push(numero * 2)
    }
    console.log( dobles.join(' ') )
}

mostrarDobles( numeros )


//Ejercicio 7 --Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
//objeto representa a 1 persona con al menos 4 propiedades, realizar un programa que
//muestre un mensaje de presentación por cada elemento del array.
console.log("Ejercicio 7")
const grupoFamiliar = [
  { nombre: "Rube", edad: 65, parentesco: "El padre", ciudad: "Caracas Venezuela" },
  { nombre: "Angelica", edad: 62, parentesco: "La madre", ciudad: "Santiago Chile" },
  { nombre: "David", edad: 29, parentesco: "El hermano", ciudad: "Santiago Chile" },
  { nombre: "Miguel", edad: 72, parentesco: "El tio", ciudad: "Santiago Chile" },
  { nombre: "Ivan", edad: 33, parentesco: "mi persona", ciudad: "Santiago Chile" }
];

for (let i = 0; i < grupoFamiliar.length; i++) {
  const persona = grupoFamiliar[i];
  console.log(`Hola, soy ${persona.nombre}, tengo ${persona.edad} años, soy ${persona.parentesco} y soy de ${persona.ciudad}.`);

}


//Ejercicio 8 --Dado un array de 10 números, realizar un programa que recorra el array y solo muestre
//los números impares.
console.log("Ejercicio 8")
function mostrarImpares(arrayNumerosImpares) {

    for (let i = 0; i < arrayNumerosImpares.length; i++) {
     
      let numero = arrayNumerosImpares[i];
      if (numero % 2 != 0) {
        console.log("El número " + numero + " es impar.");
      }
    }
  }
  
  let arrayNumerosImpares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  mostrarImpares(arrayNumerosImpares);
  


//Ejercicio 9 --Realizar un programa que permita la entrada de números y calcule la suma de los
//números pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el
//usuario ingresa un 0.
console.log("Ejercicio 9")
let numero;
let sumaPares = 0;
let sumaImpares = 0;

do {
  numero = parseInt(prompt("Ingrese un número (ingrese 0 para finalizar):"));

  if (numero !== 0) {
    if (numero % 2 === 0) {
      sumaPares += numero;
    } else {
      sumaImpares += numero;
    }
  }
} while (numero !== 0);

console.log("La suma de los números pares es:", sumaPares);
console.log("La suma de los números impares es:", sumaImpares);



//Ejercicio 10 --Dado un array de 10 números, realizar un programa que imprima por pantalla el
//número más grande.

console.log("Ejercicio 10")
 let nuevoArray = [5, 6, 2, 6, 8, 10, 7, 6, 89, 12]
 let numMayor = nuevoArray[0]
 for (let i = 1; i<= nuevoArray.length; i++){
     if(nuevoArray[i] > numMayor){
         numMayor = nuevoArray[i]
     }
 }
 console.log("El numero mas grande es: " + numMayor)

    
