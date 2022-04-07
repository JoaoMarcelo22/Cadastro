import {Cliente} from "./Cliente.js";
export {capturar}

let cidade = " ";
let estado = " ";
let cpf = " ";
let nome = " ";
function capturar(){
    nome = document.getElementById('nome').value;
    cpf = document.getElementById('cpf').value;
    estado = document.getElementById('Estado').value;
    cidade = document.getElementById('Cidade').value;
    let cliente1 = new Cliente(nome, cpf,estado,cidade) ;
    console.log(cliente1);
}
//npx serve criação de um servidor local para o teste