
//Bienvenida al Usuario

function solicitarNombre (){
    let nombre = prompt("Bienvenido a GYM BA, Por favor ingresa tu nombre: ")

    alert("Bienvenido " + nombre + "! A continuación vas a poder ver tu rutina semanal y realizar cambios.");
}

solicitarNombre();


//Usuario consulta su entrenamiento
class Rutina {
    constructor(dia, ejercicios, duracion) {
        this.dia = dia;
        this.ejercicios = ejercicios;
        this.duracion = parseInt(duracion);
    }    

}

//Arrays de entrenamiento semanal.
const rutinaCompleta = [];

rutinaCompleta.push (new Rutina("Lunes", "Pecho y Espalda", "50"));
rutinaCompleta.push(new Rutina("Miercoles", "Hombros y Brazos", "55"));
rutinaCompleta.push(new Rutina("Jueves", "Piernas", "40"));


//Calculo del tiempo semanal del entrenamiento
let total = rutinaCompleta.reduce((tiempo, t) => tiempo + t.duracion, 0);


//El usuario ingresa los datos para ver su rutina
let ingresaDato = prompt("Si deseas ver tu Rutina Completa ingresa 'rutina' \n Si deseas modificar tu Rutina ingresa 'cambio' \n Si deseas ver la duración tu rutina semanal completa ingresa 'tiempo'");


//El usuario puede ver sus dias de entrenamiento y la duración total.
if(ingresaDato == "rutina"){
    for (let rutina of rutinaCompleta) {
        alert("El dia " + rutina.dia + " Entrenas " + rutina.ejercicios + ". Y la duración es de " + rutina.duracion + " minutos."); 
    } 
    
} else if(ingresaDato == "tiempo"){
    alert("Tu rutina semanal tiene " + rutinaCompleta.length + " Dias. Y El tiempo completo es tu entrenamiento es de " + total + " minutos.");


//El usuario puede realizar cambios en su rutina, agregar 1 dia disponible, o quitar 1 dia.
} else if(ingresaDato == "cambio"){
    let cambio = prompt("Por el momento solo puedes agregar a tu Rutina el dia viernes, si deseas agregar ingresa 'viernes' \n Si deseas quitar un dia de tu Rutina, ingresa que dia deseas quitar: lunes, miercoles o jueves")

    if(cambio == "viernes"){
        rutinaCompleta.push({dia: "Viernes", ejercicios: "Cardio", duracion: 25})
        alert("Agregaste el día viernes. \n A tu rutina le quedan " + rutinaCompleta.length + " dias:") 

        for (let rutina of rutinaCompleta){
            alert("El dia " + rutina.dia + " Entrenas " + rutina.ejercicios + ". Y la duración es de " + rutina.duracion + " minutos."); 
        }

    } else if(cambio == "lunes"){
        rutinaCompleta.splice(0,1);
        alert("Quitaste el dia lunes. \n A tu rutina le quedan " + rutinaCompleta.length + " dias:") 
        for (let rutina of rutinaCompleta){
            alert("El dia " + rutina.dia + " Entrenas " + rutina.ejercicios + ". Y la duración es de " + rutina.duracion + " minutos."); 
        }

    } else if(cambio == "miercoles"){
        rutinaCompleta.splice(1,1)
        alert("Quitaste el dia miercoles. \n A tu rutina le quedan " + rutinaCompleta.length + " dias:") 
        for (let rutina of rutinaCompleta){
            alert("El dia " + rutina.dia + " Entrenas " + rutina.ejercicios + ". Y la duración es de " + rutina.duracion + " minutos."); 
        }

    } else if(cambio == "jueves"){
        rutinaCompleta.splice(2,1)
        alert("Quitaste el dia jueves. \n A tu rutina le quedan " + rutinaCompleta.length + " dias:") 
        for (let rutina of rutinaCompleta){
            alert("El dia " + rutina.dia + " Entrenas " + rutina.ejercicios + ". Y la duración es de " + rutina.duracion + " minutos."); 
        }
    } else {
        alert("Ingrese un dato correcto");
    }
    
} else {
    alert("Ingresa un dato correcto!");

}
