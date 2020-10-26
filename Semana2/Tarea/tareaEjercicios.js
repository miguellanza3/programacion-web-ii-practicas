// 1. Texto truncado
// dado una cadena de texto de n caracteres,
// truncar la cadena de texto a determinado número de caracteres
// en base aun argumento pasado en f(n), donde n es un numero natural > 0
// además concatenear la frase "... Leer más"
//ejercicio 1

const numero = 10;
const parafo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const leerMas = "... leer mas";

function textoTruncado(parafo, numero, leerMas) {
  return (foundSubString = parafo.substring(0, numero) + leerMas);
}
console.log(textoTruncado(parafo, numero, leerMas));



// 2. vocales
// dado una cadena de texto de n caracteres
// buscar en cada palabra que compone dicha cadena la última vocal en la
// presente palabra y reemplazarla por una vocal pasada como argumento
// Ej.
/**
 * const input = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`; 
 * vocal pasada como argumento f(a)
   output =  'Loram ipsam dolar sat amat, consectetar adipiscang elat.'
   ** nótese     ^     ^     ^   ^    ^            ^         ^     ^  
 */

const  contenido = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."


cambiarVocal = ( text, vocal ) =>{
  const quitar = text.split(" ");
  let reemplazar = "";
  let salida = "";
 

  for (let i = 0; i < quitar.length; i++){
  let contador = 0
  let elemento = quitar[i]; 


    for (let q = elemento.length -1; q >= 0; q-- ){
      if (contador == 0){
        if(elemento[q]=="a"||elemento[q]=="e"|| elemento[q]=="i"
        ||elemento[q]=="o"||elemento[q]=="u"){
          reemplazar += elemento[q].replace(elemento[q], vocal)
          contador = 1;
        }else{
          reemplazar += elemento[q]
        }

      } else {
        reemplazar += elemento[q];
      }
      
      }
      reemplazar += " ";
    }

    const arreglo = reemplazar.split(" ");

    for (let i = 0; i < arreglo.length;i++){
      let revisar = arreglo[i];

      for (let q = revisar.length -1; q >= 0; q --){
       salida += revisar[q];
        
      }
      salida += " ";
      
    }
    return salida ;
}
console.log(cambiarVocal(contenido,"p"));


// EJERCICIO III ____________________________________



resolverEcuacion = (ecuacion)=>{
  const patron = /(?<a>[0-9]+)(?<x>[\x])(?<operador>[\+|-])(?<b>[0-9]+)(?<igual>=)(?<c>[0-9]+)$/m;
  const resultado = Array.from(ecuacion.match(patron));

  const primero = resultado[1] + resultado[2] + " = " + (resultado[6] > 0 ? resultado[6] : "") + (resultado[3] == "+" ? '-' + resultado[4] :'+' + resultado[4])
  console.log("primer paso " + primero);
} 

resolverEcuacion("3x+6=0");