var estadoLicuadora = "apagada";

var sonidoLicuadora = document.getElementById("blender-sound")
var sonidoBoton = document.getElementById("blender-button-sound")

var licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if (estadoLicuadora == "apagada"){
        estadoLicuadora = "encendida"
        licuadora.classList.add("active")
        console.log("Licuadora encendida");
        ruido();
        
    } else {
        estadoLicuadora = "apagada"
        licuadora.classList.remove("active")
        console.log("Licuadora apagada")
        ruido()
    }
}

function ruido() {
    if (sonidoLicuadora.paused){
        sonidoLicuadora.play();
        sonidoBoton.play();
    } else {
        sonidoBoton.play()
        sonidoLicuadora.pause()
        sonidoLicuadora.currentTime = 0;
    }
}