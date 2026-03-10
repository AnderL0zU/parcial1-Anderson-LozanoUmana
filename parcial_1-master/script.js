let contador
let regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let regexLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,50}$/;


function solicitarServicio() {

    contador++

    alert("Servicios solicitados: " + contador)

}


function registrar() {

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let apellido = document.getElementById("apellido").value;
    let ciudad = document.getElementById("ciudad").value;
    let edad = document.getElementById("edad").value;

    if(!regexLetras.test(nombre)){
        console.warn("Error en el nombre")
    }

    if(!regexLetras.test(ciudad)){
        console.warn("Error en la ciudad")
    }

    if(!regexLetras.test(apellido)){
        console.warn("Error en el apellido")
    }

    if(!regexMail.test(correo)){
        console.warn("Error en el nombre")
    }
    
    if(edad < 1 || edad > 120){
        console.warn("Ingrese una edad correcta")
    } else if(edad >= 18){
        console.log("Es mayor de edad")
    } else {
        console.log("Es menor de edad")
    }

        alert("Usted es: " + nombre + " " + apellido + " que escribe desde " + ciudad + " Con el correo: " + correo + " , con " + edad + "Años")
}



document.getElementById("modoBtn").addEventListener("click", function() {

    document.body.classList.toggle("dark")

})
