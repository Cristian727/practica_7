function eventoHTMLButton(){
    document.querySelector("#textoResultado").innerHTML = "Has hecho click en el botón con evento HTML"
    document.querySelector("#textoResultado").style.background = "red"
}

const boton2 = document.querySelector("#boton2")

function eventoListener(){
    document.querySelector("#textoResultado").innerHTML = "Has hecho click en el botón con addEventListener"
    document.querySelector("#textoResultado").style.background = "blue"

}


boton2.addEventListener("click", () =>{
    document.querySelector("#textoResultado").innerHTML = "Has hecho click en el botón con addEventListener"
    document.querySelector("#textoResultado").style.background = "blue"

})

//boton2.addEventListener("click", eventoListener)

const boton3 = document.querySelector("#boton3")

boton3.onclick = () => {
    document.querySelector("#textoResultado").innerHTML = "Has hecho click en el botón con event handler"
    document.querySelector("#textoResultado").style.background = "yellow"

}