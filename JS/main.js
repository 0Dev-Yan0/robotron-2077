/* Sempre de um console.log() ao finalizar a criação de qualquer variavel ou function para confirmar se não houve nenhum erro*/

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const atributos = document.querySelectorAll('[data-atributo]')

const valor_da_contagem = document.querySelectorAll('[data-valor]')

valor_da_contagem.forEach((caractere_escolhido_por_clique) => {
    caractere_escolhido_por_clique.addEventListener('click', (parametro_que_foi_atingido_na_consequencia_do_click) => {
        contador(parametro_que_foi_atingido_na_consequencia_do_click.target.dataset.valor, parametro_que_foi_atingido_na_consequencia_do_click.target.parentNode) /* A palavra valor escrito aqui remete ao nome da data */
        /* A function anônima só atribui a |function contador| para o atingido dentro dela. */
    })
})
/* O target.textContent só define que sera os caracteres do atingido que seram lidos pelo contador atrás dele
    E o target.parentNode faz com que seja lido apenas o pai do atingido */

function contador(parametriado, pai_do_segundo_elemento_lido) {
    const peca = pai_do_segundo_elemento_lido.querySelector('[data-contagem]')
    if (parametriado === '+') {
        //  braco.value = parseInt(braco.value) + 1
        peca.value = parseInt(peca.value) + 1
    } else if (parseInt(peca.value) > 0) {
        //  braco.value = parseInt(braco.value) - 1
        peca.value = parseInt(peca.value) - 1
    }
}
/* O parametriado lido pela |function contador| é o mesmo de quando ele passa a ser definido pelo parametro_que_foi_atingido_na_consequencia_do_click só que por causa do target.textContent ele passa a ler apenas os caracteres do atingido
E o pai_do_segundo_elemento_lido é no começo a div pai daquele em si clicado sendo ela class="controle", mas o querySelector('.controle-contador') faz com que seja o controle contador de tal div clicada */

/* function mostre() {
    itens.style.display = 'block'
} */

/* const braco = document.querySelector('#braco') */