class Operacion {
    n1:number;
    n2:number;
    
    constructor(n1:number, n2: number){
        this.n1 = n1;
        this.n2 = n2;
        
    }
    suma() {
        return  this.n1+this.n2;
      }
    resta(){
        return this.n1-this.n2;
    }  
    multiplicar(){
        return this.n1*this.n2;
    }
    division(){
        return this.n1/this.n2;
    }
  }
  
//Invocando la clase y sus metodos=========================================
let miSuma: Operacion = new Operacion(1,1);
console.log("Operación suma con clases: " + miSuma.suma());

let miResta: Operacion = new Operacion(50,20);
console.log("Operación sustracción con clases: " +miResta.resta());

let miMultiplicacion: Operacion = new Operacion(10,10);
console.log("Operación multiplicación con clases: " + miMultiplicacion.multiplicar());

let miDivision: Operacion = new Operacion(4,16);
console.log("Operación de división con clases: " + miMultiplicacion.division());


//OPERACIONES HECHAS CON FUNCIONES====================================
  function suma(num1:number, num2:number){
    return num1+num2;
  }
  console.log("El resultado de la suma es: " + suma(2,2));

  
  function resta(num1:number, num2:number){
    return num1-num2;
  }
  console.log("El resultado de la resta es: " + resta(4,2));

  function multiplicacion(num1:number, num2:number){
    return num1*num2;
  }
  console.log("El resultado de la multiplicación es: " + multiplicacion(5,5));
