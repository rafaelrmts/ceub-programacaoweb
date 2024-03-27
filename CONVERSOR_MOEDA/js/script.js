const valoresConversao = {
    real: {
        euro: 0.19,
        dolar: 0.20
    },
    dolar:{
        real: 4.99,
        euro: 0.92
    },
    euro:{
        real: 5.40,
        dolar: 1.08
    }
}



function converter() {
    let valorUsuario = document.getElementById("valorEntrada").value;
    let firtSelect = document.getElementById("firt-select").value;
    let secondSelect = document.getElementById("second-select").value;


    if (firtSelect == secondSelect) {
        alert("As Moedas são iguais.")
        return;
    }

    let resultado = valorUsuario * valoresConversao[firtSelect][secondSelect];

    let paragrafoResultado = document.getElementById("paragrafo-resultado");
    paragrafoResultado.textContent = resultado;

}

function limpar() {
    let paragrafoResultado = document.getElementById("paragrafo-resultado");
    paragrafoResultado.textContent = "";

    let valorEntrada = document.getElementById("valorEntrada");
    valorEntrada.value = "";

    

 
}

function inverter() {
    let valorMoeda1 = document.getElementById("firt-select").value;
    let valorMoeda2 = document.getElementById("second-select").value;

    document.getElementById("firt-select").value = valorMoeda2;
    document.getElementById("second-select").value = valorMoeda1;
    
    


}