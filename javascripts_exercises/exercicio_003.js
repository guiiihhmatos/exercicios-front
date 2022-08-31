'use strict';
// 1) Corrija o(s) erro(s) que encontrar no html e javascript para fazer o programa funcionar

// 2) Faça o método mostraAlerta da classe Alerta disparar um erro ao receber um valor diferente de string
// ... Sugestão de mensagem para o erro: "valor inválido!"
class Alerta {

  constructor() {}

  static mostraAlerta(mensagem) {
    
    alert(mensagem);
  }
  
}

function onClick()
{
  let mensagem = document.getElementById('mensagem')

  try {

    if(mensagem.value != '' && typeof mensagem.value === 'string') //o valor do input vai ser sempre string mas entendi dessa maneira o exercicio

      criaMensagem('body > h1', mensagem.value);

    else

      Alerta.mostraAlerta('Valor inválido');
    
  } catch(error) {
    console.error(error);
  }
  
}

const criaMensagem = function(seletor, valorAlternativo) {
  let tag = document.querySelector(seletor);
  let texto = tag.innerHTML = valorAlternativo;

  if(valorAlternativo !== undefined) 
    return valorAlternativo;

    return (texto.match(/[0-9]/) !== null) ? +texto : texto;
}

//no exercicio entendi que eu devia receber uma valor digitado pelo usuario atraves de um input, receber esse valor e colocar ele abaixo do input