const suma = (a,b)=> a+b;



const obtenerMayor = (num1, num2, num3) => {
    let mayor = num1;
    let repetidos = [];
  
    if (num2 > mayor) {
      mayor = num2;
    } else if (num2 === mayor) {
      repetidos.push(num2);
    }
  
    if (num3 > mayor) {
      mayor = num3;
    } else if (num3 === mayor) {
      repetidos.push(num3);
    }
  
    return { mayor, repetidos };
  };

  const resultado = obtenerMayor(6, 6, 10);
  console.log("El mayor número es:", resultado.mayor);
  console.log("Los números repetidos son el numero:", resultado.repetidos);

