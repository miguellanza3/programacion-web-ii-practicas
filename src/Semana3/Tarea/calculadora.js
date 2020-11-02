var Operacion = /** @class */ (function () {
    function Operacion(n1, n2) {
        this.n1 = n1;
        this.n2 = n2;
    }
    Operacion.prototype.suma = function () {
        return this.n1 + this.n2;
    };
    Operacion.prototype.resta = function () {
        return this.n1 - this.n2;
    };
    Operacion.prototype.multiplicar = function () {
        return this.n1 * this.n2;
    };
    Operacion.prototype.division = function () {
        return this.n1 / this.n2;
    };
    return Operacion;
}());
//Invocando la clase y sus metodos=========================================
var miSuma = new Operacion(1, 1);
console.log("Operación suma con clases: " + miSuma.suma());
var miResta = new Operacion(50, 20);
console.log("Operación sustracción con clases: " + miResta.resta());
var miMultiplicacion = new Operacion(10, 10);
console.log("Operación multiplicación con clases: " + miMultiplicacion.multiplicar());
var miDivision = new Operacion(4, 16);
console.log("Operación de división con clases: " + miMultiplicacion.division());
//OPERACIONES HECHAS CON FUNCIONES====================================
function suma(num1, num2) {
    return num1 + num2;
}
console.log("El resultado de la suma es: " + suma(2, 2));
function resta(num1, num2) {
    return num1 - num2;
}
console.log("El resultado de la resta es: " + resta(4, 2));
function multiplicacion(num1, num2) {
    return num1 * num2;
}
console.log("El resultado de la multiplicación es: " + multiplicacion(5, 5));
