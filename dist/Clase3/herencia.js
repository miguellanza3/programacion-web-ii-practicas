"use strict";
class Animal {
    constructor(especie) {
        this.Especie = especie;
    }
    sonido() {
        console.log("Ruge");
    }
}
class Leon extends Animal {
}
let animalito = new Leon("felino");
animalito.sonido();
//console.log(animalito);
//Moto => Metodo Encender
class Motor {
    constructor() {
        this.Encender = () => {
            console.log("Encender");
        };
    }
}
//Combustion interna
//ciclindros
class CombustionInterna extends Motor {
}
//Eléctrico
//Amperaje
class Electrico extends Motor {
}
