let Numeros = [];
let operacionesjava = document.getElementById("Operaciones");
let numeroactual = operacionesjava.innerText; //Al colocar el metodo "innerText" en esta linea condicionas a que el elemento selecionado sea lo que esta detro de la etiqueta y no la etiqueta completa"
let respuestaoperacion = document.getElementById("Respuestadeoperacion");

function suma(simbolo){
     numeroactual = operacionesjava.innerText; // Obtener el contenido actual del div

            // Verificar si el último carácter es un operador '+'
            if (numeroactual.endsWith('+')|| numeroactual.endsWith('-')|| numeroactual.endsWith('/')|| numeroactual.endsWith('*')|| numeroactual.endsWith('.')) {
                return; // Si ya termina con un '+', no hacer nada
            }

            // Concatenar el símbolo al contenido actual
            operacionesjava.innerText = numeroactual + simbolo; // Añadir espacio antes del operador
        }

function resta(simbolo){
     numeroactual = operacionesjava.innerText; 

            if (numeroactual.endsWith('+')|| numeroactual.endsWith('-')|| numeroactual.endsWith('/')|| numeroactual.endsWith('*')|| numeroactual.endsWith('.')) {
                return; 
            }

            operacionesjava.innerText = numeroactual + simbolo; 
            
        }

function multiplicar(simbolo){
     numeroactual = operacionesjava.innerText; 

            if (numeroactual.endsWith('+')|| numeroactual.endsWith('-')|| numeroactual.endsWith('/')|| numeroactual.endsWith('*')|| numeroactual.endsWith('.')) {
                return; 
            }

            operacionesjava.innerText = numeroactual + simbolo; 
            
        }

function dividir(simbolo){
     numeroactual = operacionesjava.innerText; 

            
            if (numeroactual.endsWith('+')|| numeroactual.endsWith('-')|| numeroactual.endsWith('/')|| numeroactual.endsWith('*')|| numeroactual.endsWith('.')) {
                return; 
            }

            operacionesjava.innerText = numeroactual + simbolo; 
            
        }

function punto(simbolo){
     numeroactual = operacionesjava.innerText; 

            
            if (numeroactual.endsWith('+')|| numeroactual.endsWith('-')|| numeroactual.endsWith('/')|| numeroactual.endsWith('*')|| numeroactual.endsWith('-')|| numeroactual.endsWith('/')) {
                operacionesjava.innerText += "0."; 
                return;
            }
            if(numeroactual.endsWith(".")){
                return;
            }
            // Extraer la última parte después del último operador para revisar si ya hay un punto
            let partes = numeroactual.split(/[\+\-\*\/]/);
            let ultimoNumero = partes[partes.length - 1];

            if (ultimoNumero.includes(".")) {
            return; // Ya tiene un punto decimal
    }
            
            operacionesjava.innerText = numeroactual + simbolo; 
        }

function parentesis(){
    numeroactual = operacionesjava.innerText;
    const cuentabierto = (operacionesjava.innerText.match(/\(/g) || []).length;
    const cuentacerrado = (operacionesjava.innerText.match(/\)/g) || []).length;
   

    operacionesjava.innerText = numeroactual + "(";

    if (numeroactual === "0"){
        operacionesjava.innerText = "(";
    }else {
         operacionesjava.innerText = numeroactual + "*" + "(";
    }
   
    if (numeroactual.endsWith('+')|| numeroactual.endsWith('-')|| numeroactual.endsWith('/')|| numeroactual.endsWith('*')|| numeroactual.endsWith('-')|| numeroactual.endsWith('/')|| numeroactual.endsWith('.')|| numeroactual.endsWith('(')){
        operacionesjava.innerText = numeroactual + "(";
    }
     if (numeroactual.endsWith(".")){
        operacionesjava.innerText = numeroactual;
    }
    if (numeroactual.includes('(') && /\d$/.test(numeroactual) && cuentabierto > cuentacerrado ) {
         operacionesjava.innerText = numeroactual + ")";
         
    } 
    if(numeroactual.endsWith(")") && cuentabierto > cuentacerrado){
        operacionesjava.innerText = numeroactual + ")";
    }
    if(numeroactual.endsWith(")")){
        let ultimoparabierto = operacionesjava.lastIndexOf('(');
        

        
        for (let i = operacionesjava.innerText.length - 1; i >= 0; i--){
        let parabierto = operacionesjava.innerText[i] 
        if(parabierto === "("){
            operacionesjava.innerText = 
            i = parabierto[i];

        }
    }
    }
    }


function porcentaje() {
    let numeroactual = operacionesjava.innerText;

    // Si termina con un operador, no hacemos nada
    if (/[+\-*/]$/.test(numeroactual)) {
        return;
    }

    // Obtener el último número de la expresión
    let partes = numeroactual.split(/[\+\-\*\/]/);
    let ultimoNumero = partes[partes.length - 1];

    if (ultimoNumero === "") return;

    // Calcular el porcentaje (dividir entre 100)
    let porcentaje = parseFloat(ultimoNumero) / 100;

    // Reemplazar el último número con su porcentaje
    let inicio = numeroactual.slice(0, numeroactual.length - ultimoNumero.length);
    operacionesjava.innerText = inicio + porcentaje;
}


function presionar(numero) {

    numeroactual = operacionesjava.innerText; //Con esta linea se actualiza el valor dentro de java, porque si no java sigue pensando que el valor es 0, aun que cambie en el html.
    if (numeroactual === "0"){
        operacionesjava.innerText = numero;
    }else {
         operacionesjava.innerText = numeroactual + numero;
    }
    if (numeroactual.length >= 30){
        operacionesjava.innerText = numeroactual;
    }
    // Verificar si el contenido termina con '+0', y evitar agregar más
    if (numeroactual.endsWith("+0")|| numeroactual.endsWith('-0')|| numeroactual.endsWith('/0')|| numeroactual.endsWith('*0') || numeroactual.endsWith("(0")){
        operacionesjava.innerText = numeroactual;// Restaurar el valor si es inválido
    }
    if(numeroactual.endsWith(")")){
        operacionesjava.innerText = numeroactual + "*" + numero;
    }
   
}


   




function limpiar(){
    document.getElementById("Operaciones").innerText = "0";
    document.getElementById("Respuestadeoperacion").innerText = "";
}

function ejecutaroperacion(){
    numeroactual = operacionesjava.innerText;
    const operacionejecutada = eval(numeroactual);

    
    respuestaoperacion.innerText = operacionejecutada;

  
}








//function presionar(numero) {
 //   let numeroactual = document.getElementById("Operaciones").innerText; //Al colocar el metodo "innerText" en esta linea condicionas a que el elemento selecionado sea lo que esta detro de la etiqueta y no la etiqueta completa"
 //   if (numeroactual == "0"){
//        document.getElementById("Operaciones").innerText = numero;
 //   }else {
   //      document.getElementById("Operaciones").innerText = numeroactual + numero;
 //   }
//    if (numeroactual.length > 9){
  //      document.getElementById("Operaciones").innerText = numeroactual;
 //   }
 
//}





