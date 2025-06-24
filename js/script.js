const numero = parseInt(document.getElementById('num').value);
enviar.addEventListener('click', tabuada)

function tabuada() {
   

    for (let i = 0; numero != 0; i++) {
        while (i <= 10) {
            var resultado = numero * i
        }
        resul.textContent = `Número ${numero} x ${i} = ${resultado}`
    }
    
}