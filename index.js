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
    return cliente1;
    
}

let cliente1 = new Cliente(nome, cpf,estado,cidade) ;


console.log(cliente1)