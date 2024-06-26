const valoresConversao = {
    real: {
        euro: 0.19,
        dolar: 0.20,
        simbolo: "R$"
    },
    dolar:{
        real: 4.99,
        euro: 0.92,
        simbolo: "US$"
    },
    euro:{
        real: 5.40,
        dolar: 1.08,
        simbolo: "€"
    }
}

// Puxando valores do HTML
const botaoInverter = document.getElementById("btn-inverter");
botaoInverter.addEventListener("click", inverter);

const botaoLimpar = document.getElementById("btn-limpar");
botaoLimpar.addEventListener("click", limpar);

const botaoConverter = document.getElementById("btn-submit");
botaoConverter.addEventListener("click", converter);

const botaoAceitarMensagem = document.getElementById("botao-aceita-mensagem");
botaoAceitarMensagem.addEventListener("click", aceitarMensagem);


if(localStorage.getItem("aceitouCookie") == "1") {
    const divMensagemUsuario = document.getElementById("mensagem-usuario");
    divMensagemUsuario.classList.add("oculto");

}


function aceitarMensagem(){
    const divMensagemUsuario = document.getElementById("mensagem-usuario");
    divMensagemUsuario.classList.add("oculto");

    localStorage.setItem("aceitouCookie", "1");
}
//

//
let valorUsuario = document.getElementById("valorEntrada");
valorUsuario.addEventListener("keypress", function(event){
    if(event.key == "Enter") {
        event.preventDefault();
        converter();
    }
});
// 



function converter() {
    // let historicoRecuperado = recuperarHistorico();


    let valorUsuario = document.getElementById("valorEntrada").value;
    let firtSelect = document.getElementById("first-select").value;
    let secondSelect = document.getElementById("second-select").value;

    let erroConverter = document.getElementById("erro-converter");
    erroConverter.textContent = "";

    if (firtSelect == secondSelect) {
        let paragrafoResultado = document.getElementById("paragrafo-resultado");
        paragrafoResultado.textContent = "";
        erroConverter.textContent = "As moedas são iguais.";
        return;
    }

    if(valorUsuario <= 0 || valorUsuario == 0) {
        erroConverter.textContent = "Verificar valor.";
        return;
    };

    
    let simbolo = valoresConversao[secondSelect]["simbolo"];

    let resultado = valorUsuario * valoresConversao[firtSelect][secondSelect];

    let paragrafoResultado = document.getElementById("paragrafo-resultado");
    paragrafoResultado.textContent = simbolo + " " + resultado.toFixed(2);



    let objetoResultado = {
        valorDoUsuario: valorUsuario,
        valorMoeda1: firtSelect,
        valorMoeda2: secondSelect,
        valorResultado: resultado
    }
   

    // let objetoResultadoJSON = JSON.stringify(objetoResultado);

    salvarHistorico(objetoResultado);

    // localStorage.setItem("historico", objetoResultadoJSON);

   
}

function recuperarHistorico() {
    let historico = localStorage.getItem("historico");
    
    if (!historico) {
        return  [];   
    }

    let historicoObjeto = JSON.parse(historico);

    return historicoObjeto;

}

function salvarHistorico (conversao) {
    let historico = recuperarHistorico();
    historico.push(conversao);
    localStorage.setItem("historico", JSON.stringify(historico))
}







function limpar() {
    let paragrafoResultado = document.getElementById("paragrafo-resultado");
    paragrafoResultado.textContent = "";

    let erroConverter = document.getElementById("erro-converter");
    erroConverter.textContent = "";

    let valorEntrada = document.getElementById("valorEntrada");
    valorEntrada.value = "";
}


function inverter() {
    
    let valorMoeda1 = document.getElementById("first-select").value;
    let valorMoeda2 = document.getElementById("second-select").value;

    document.getElementById("first-select").value = valorMoeda2;
    document.getElementById("second-select").value = valorMoeda1;
}