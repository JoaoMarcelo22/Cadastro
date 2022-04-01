import {Cliente} from "./Cliente.js";
let cidadeO = "";
let cidadeA = "";
let estadoA = "";
let cpf = "";
let nome = "";
function capturar(){
    nome = document.getElementById('nome').value;
    cpf = document.getElementById('cpf').value;
    estadoA = document.getElementById('EstadoAtual').value;
    cidadeA = document.getElementById('CidadeAtual').value;
    cidadeO = document.getElementById('EstadoOrigem').value;
}

let cliente1 = new Cliente(nome, cpf,estadoA,cidadeA,cidadeO) ;


console.log(cliente1)