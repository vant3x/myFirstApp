const nombre = "Alejandro Velásquez";
let vegetariano = false;



function miEdad(n) {
    for (let i = 0; i <= n;  i++) {
        if (i === n) {
            console.log(`Hola soy ${nombre} y tengo ${i} años`);
            return i;
        }
    }
}


let edad = parseInt(prompt("Ingresa tu edad"));

miEdad(edad);


function mathOp() {
  let operacion;

  do {
    operacion = parseInt(prompt(
        "Escoge una operación: \n 1.Suma \n 2.Resta \n 3.Multiplicación \n 4.Division \n 5.Salir"
      ));

      let n1 = parseInt(Math.random() * 10), n2 = parseInt(Math.random() * 10);

      switch (operacion) {
          case 1: {
              let suma = n1 + n2;
              alert("La suma de : " + n1 + " y " + n2 + " es: " + suma);
              break;
          }
          case 2: {
            let resta = n1 - n2;
            alert("La resta de : " + n1 + " y " + n2 + " es: " + resta);
            break;
          }

          case 3: {
            let multiplicacion = n1 * n2;
            alert("La multiplicacion de : " + n1 + " y " + n2 + " es: " + multiplicacion);
            break;
          }

          case 4: {
            let division = n1 / n2;
            alert("La division de : " + n1 + " y " + n2 + " es: " + division);
            break;
          }

          default: {
              alert("Salir");
          }
      }
  } while(operacion !== 5);

} 

mathOp();
if (edad >= 18) {
    console.log("Eres mayor");
    alert("Eres Mayor");
} else {
    console.log("Eres menor");
    alert("Eres menor");
}
