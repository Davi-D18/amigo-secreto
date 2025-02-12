export let amigosAdicionados = [];

const tempoLoading = 2000;

export function adicionarAmigos (nome) {
  if (amigosAdicionados.includes(nome.value)) {
    exibirMensagemError(true, `${nome.value} ja foi adicionado`);
    return;
  }

  const ul = document.querySelector('#listaAmigos');

  const li = document.createElement('li');
  li.textContent = nome.value;
  ul.appendChild(li);

  amigosAdicionados.push(nome.value);

  nome.value = '';
}

export function sortearAmigo () {
  if (amigosAdicionados.length === 0) {
    alert('Adicione amigos para sortear');
    return;
  }

  loading();

  setTimeout(() => {
    const vencedor = Math.floor(Math.random() * amigosAdicionados.length);
    const sorteado = document.querySelector('#resultado');
    sorteado.textContent = amigosAdicionados[vencedor];
  }, tempoLoading)
}

export function exibirMensagemError (exibir = false, mensagem) {
  const paragrafoError = document.querySelector('.error-message');
  
  if (exibir) {
    paragrafoError.textContent = mensagem;
    return;
  } else (
    paragrafoError.textContent = ''
  )
}

export function loading () {
  const loading = document.querySelector('.loading');
  const iconButtonSortear = document.querySelector(".button-draw img");
  const buttonSortear = document.querySelector(".button-draw");

  iconButtonSortear.style.display = 'none';
  buttonSortear.style.backgroundColor =  "#b44821";
  loading.style.display = 'block';

  setTimeout(() => {
    loading.style.display = 'none';
    buttonSortear.style.backgroundColor =  "";
    iconButtonSortear.style.display = 'block';
  }, tempoLoading)
}