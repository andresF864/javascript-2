const evaluar =()=>{
    const edad = prompt("cual es tu edad")
    if(edad>18){
        document.write("es mayor de edad")
    }else{
        document.write("es menor de edad")
    }
};

setTimeout(evaluar,5000)