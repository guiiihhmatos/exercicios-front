'use strict';
// Usando javascript esconda o botão e mostre o quadrado escondido na tela, e 3 segundos após o clique, aplique no quadrado a classe blue do css.

function onClick()
{
    let botao = document.getElementsByTagName('button')[0]
    let quadrado = document.getElementsByTagName('div')[0]

    botao.style.display = 'none'
    quadrado.style.display = 'block'
    quadrado.classList.add('blue')
}