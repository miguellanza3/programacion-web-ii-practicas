class Animal {
    Especie: string;
    constructor(especie:string){
        this.Especie = especie;
    }
    sonido(){
        console.log("Ruge");
    }
}
class Leon extends Animal {
}
let animalito = new Leon ("felino");
animalito.sonido();
//console.log(animalito);


//Moto => Metodo Encender

class Motor {
    Encender = ()=>{
    console.log("Encender")
    }
}

//Combustion interna
    //ciclindros
 class CombustionInterna extends Motor{
    cilindros: string;
    combustible: string;
 }   

//Eléctrico
    //Amperaje

class Electrico extends Motor {
    amperaje: string;
}