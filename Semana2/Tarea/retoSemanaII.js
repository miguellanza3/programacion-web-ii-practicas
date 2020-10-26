// Dado un set desordenado de pares
// escribir una algoritmo que agrupe por brand
// y agregue un contador de por cada elemento repetido

input = [
    {
      id: 1,
      brand: "BMW",
      model: "116i",
    },
    {
      id: 2,
      brand: "BMW",
      model: "X5",
    },
    {
      id: 3,
      brand: "Toyota",
      model: "Corolla",
    },
    {
      id: 3,
      brand: "Nissan",
      model: "Navara",
    },
  ];
  output = [];
  
  function agruparMarcas() {
    var cont = 0;
    var cont1 = 0;
    var cont2 = 0;
    
    input.forEach((element) => {
      if (element.brand == "BMW") {
        cont++;
      }
      if (element.brand == "Toyota") {
        cont1++;    
      }
      if (element.brand == "Nissan") {
        cont2++;
        
      }
    });
    output.push({ brand: "BMW", count: cont });
    output.push({ brand: "Toyota", count: cont1 });
    output.push({ brand: "Nissan", count: cont2 });
    
    return output;
  
  }
  
  console.log(agruparMarcas());

  
   
   