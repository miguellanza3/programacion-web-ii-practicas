miString = 'visita la web de nube colectiva';

miString.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))); 

console.log(miString);