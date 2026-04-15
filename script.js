const btnValidar = document.getElementById("btnValidar");
const txtTelefone = document.getElementById("txtTelefone");
const txtAno = document.getElementById("txtAno");

txtTelefone.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número
    
    if (value.length > 0) {
        value = "(" + value;
    }
    if (value.length > 3) {
        value = value.slice(0, 3) + ") " + value.slice(3);
    }
    if (value.length > 10) {
        value = value.slice(0, 10) + "-" + value.slice(10);
    }
    
    e.target.value = value.slice(0, 15); // Limita ao tamanho do celular
});

txtAno.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, ""); // Remove qualquer letra ou símbolo
});

function validar() {
    let valido = true;

    // Elementos de input
    const nome = document.getElementById("txtNome");
    const email = document.getElementById("txtEmail");
    const telefone = document.getElementById("txtTelefone");
    const ano = document.getElementById("txtAno");
    const veiculo = document.getElementById("txtVeiculo");
    const placa = document.getElementById("txtPlaca");
    const problema = document.getElementById("txtProblema");

    // Validação de Nome
    if (nome.value.trim() === "") {
        mostrarErro("txtNome", "erroNome");
        valido = false;
    } else {
        limparErro("txtNome", "erroNome");
    }

    // Validação de Email (Regex para garantir @ e .)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        mostrarErro("txtEmail", "erroEmail");
        valido = false;
    } else {
        limparErro("txtEmail", "erroEmail");
    }

    // Validação de Telefone
    if (telefone.value.length < 14) {
        mostrarErro("txtTelefone", "erroTelefone");
        valido = false;
    } else {
        limparErro("txtTelefone", "erroTelefone");
    }

    // Validação de Ano
    if (ano.value.length !== 4) {
        mostrarErro("txtAno", "erroAno");
        valido = false;
    } else {
        limparErro("txtAno", "erroAno");
    }

    // Validação de Veículo
    if (veiculo.value.trim() === "") {
        mostrarErro("txtVeiculo", "erroVeiculo");
        valido = false;
    } else {
        limparErro("txtVeiculo", "erroVeiculo");
    }

    // Validação de Placa
    const placaRegex = /^[A-Z]{3}[0-9]{1}[A-Z]{1}[0-9]{2}$/i; 
    if (!placaRegex.test(placa.value)) {
        mostrarErro("txtPlaca", "erroPlaca");
        valido = false;
    } else {
        limparErro("txtPlaca", "erroPlaca");
    }

    // Validação do Problema
    if (problema.value.trim().length < 10) {
        mostrarErro("txtProblema", "erroProblema");
        document.getElementById("erroProblema").innerHTML = "Detalhe um pouco mais o problema (mín. 10 caracteres).";
        valido = false;
    } else {
        limparErro("txtProblema", "erroProblema");
    }

    if (valido) {
        document.getElementById("msgSucesso").style.display = "block";
    } else {
        document.getElementById("msgSucesso").style.display = "none";
    }
}

// Funções para gerenciar as classes de erro
function mostrarErro(inputId, erroId) {
    document.getElementById(inputId).classList.add("erro");
    document.getElementById(inputId).classList.remove("ok");
    document.getElementById(erroId).classList.add("visivel");
}

function limparErro(inputId, erroId) {
    document.getElementById(inputId).classList.remove("erro");
    document.getElementById(inputId).classList.add("ok");
    document.getElementById(erroId).classList.remove("visivel");
}

btnValidar.addEventListener("click", validar);