//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
import { adicionarAmigos, exibirMensagemError, sortearAmigo } from './functions.js';

const buttonAdicionar = document.querySelector('.button-add');
const buttonSortear = document.querySelector(".button-draw");


buttonAdicionar.addEventListener('click', () => {
  exibirMensagemError();
  let input = document.querySelector('#amigo');

  if (input.value == "") {
    exibirMensagemError(true, 'Insira um nome válido');
    return;
  }

  input.value = input.value.trim(); // Remover espacos em branco
  adicionarAmigos(input);
})

buttonSortear.addEventListener('click', () => {
  sortearAmigo();
})