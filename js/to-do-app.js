// TO DO APP V1.0.0
//2024-03-08

let listaTareas = []

const htmlPendiente = document.getElementById("pendiente");
const htmlEjecucion = document.getElementById("ejecucion");
const htmlFinalizada = document.getElementById("finalizada");

let formulario = document.getElementById("form")

formulario.addEventListener("submit", (e) => {
    e.preventDefault() // to prevent resetting when pressing submit button
    //const descripcion = document.getElementById("descripcion").value

    const tarea = new Object()
    tarea.id = new Date().getTime() //Time is always unique so use time to identificar
    tarea.descripcion = formulario[0].value
    tarea.estado = "pendiente"  //nomarlly when you add it goes to pendiente

    listaTareas.push(tarea)

    formulario.reset()
    formulario[0].focus() //instead of autofocus, can write focus in js (its because it loses it with reset)
    console.log(listaTareas)
    mostrarTareas();
})

function mostrarTareas(){
    let tareaPendiente = ""
    let tareaEjecucion = ""
    let tareaFinalizada = ""

    for ( i = 0; i < listaTareas.length ; i++){
        switch (listaTareas[i].estado){
            case "pendiente":
                tareaPendiente += `<div class="lista-tareas">`
                tareaPendiente += `<p id="${listaTareas[i].id}">${listaTareas[i].descripcion}</p><p>`
                tareaPendiente += `<span class="boton boton-pendiente" onclick="cambiarEstado(${listaTareas[i].id}, 'pendiente')"><i class="fa-regular fa-clipboard"></i></p></span>`
                tareaPendiente += `<span class="boton boton-ejecucion" onclick="cambiarEstado(${listaTareas[i].id}, 'ejecucion')"><i class="fa-solid fa-person-digging"></i></span>`
                tareaPendiente += `<span class="boton boton-finalizada" onclick="cambiarEstado(${listaTareas[i].id}, 'finalizada')"><i class="fa-solid fa-circle-check"></i></span>`
                tareaPendiente += `<span class="boton boton-borrado" onclick="borrarTarea(${listaTareas[i].id})"><i class="fa-solid fa-trash-can"></i></span>`
                tareaPendiente += `</p></div>`
                console.log("es una tarea pendiente");

            break;

            case "ejecucion":
                console.log("es una tarea ejecuccion");
            break;

            case "finalizada":
                console.log("es una tarea finalizada");
            break;
        }
    }

    htmlPendiente.innerHTML = tareaPendiente;
}

const cambiarEstado = (id, estado) => { // same as cambiarEstado(id, estado)
    console.log(id,estado)
} 