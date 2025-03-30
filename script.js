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

            
            if (numeroactual.endsWith('+')|| numeroactual.endsWith('-')|| numeroactual.endsWith('/')|| numeroactual.endsWith('*')|| numeroactual.endsWith('-')|| numeroactual.endsWith('/')|| numeroactual.endsWith('.')) {
                return; 
            }
            
            operacionesjava.innerText = numeroactual + simbolo; 
        }

function parentesis(){
    numeroactual = operacionesjava.innerText;
    const cuentabierto = (operacionesjava.innerText.match(/\(/g) || []).length;
    const cuentacerrado =(operacionesjava.innerText.match(/\)/g) || []).length;
   

    operacionesjava.innerText = numeroactual + "(";

    if (numeroactual === "0"){
        operacionesjava.innerText = "(";
    }else {
         operacionesjava.innerText = numeroactual + "*" + "(";
    }

    if (numeroactual.endsWith('+')|| numeroactual.endsWith('-')|| numeroactual.endsWith('/')|| numeroactual.endsWith('*')|| numeroactual.endsWith('-')|| numeroactual.endsWith('/')|| numeroactual.endsWith('.')|| numeroactual.endsWith('(')){
        operacionesjava.innerText = numeroactual + "(";
    }
    if (numeroactual.includes('(') && /\d$/.test(numeroactual) && cuentabierto > cuentacerrado) {
         operacionesjava.innerText = numeroactual + ")";
    } 
        
     

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
    if (numeroactual.endsWith("+0")|| numeroactual.endsWith('-0')|| numeroactual.endsWith('/0')|| numeroactual.endsWith('*0')){
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







