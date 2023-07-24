// TODO: Sempre de um console.log() ao finalizar a criação de qualquer variavel ou function para confirmar se não houve nenhum erro 

const pecas = {
    "Bracos": {
        "Forca": 29,
        "Poder": 35,
        "Energia": -21,
        "Velocidade": -5
    },

    "Blindagem": {
        "Forca": 41,
        "Poder": 20,
        "Energia": 0,
        "Velocidade": -20
    },
    "Nucleos": {
        "Forca": 0,
        "Poder": 7,
        "Energia": 48,
        "Velocidade": -24
    },
    "Pernas": {
        "Forca": 27,
        "Poder": 21,
        "Energia": -32,
        "Velocidade": 42
    },
    "Foguetes": {
        "Forca": 0,
        "Poder": 28,
        "Energia": 0,
        "Velocidade": -2
    }
}

const habilidades = document.querySelectorAll('[data-habilidade]')

const valor_da_contagem = document.querySelectorAll('[data-valor]')

const atributos = document.querySelectorAll('[data-atributo]')

valor_da_contagem.forEach((caractere_escolhido_por_clique) => {
    caractere_escolhido_por_clique.addEventListener('click', (parametro_que_foi_atingido_na_consequencia_do_click) => {
        contador(parametro_que_foi_atingido_na_consequencia_do_click.target.dataset.valor, parametro_que_foi_atingido_na_consequencia_do_click.target.parentNode)
        modificaHabilidades(parametro_que_foi_atingido_na_consequencia_do_click.target.dataset.atributo) // ! A palavra valor escrita aqui remete ao nome da data.
        // ! A function anônima só atribui a |function contador| para o atingido dentro dela. 
    })
})
/**
 * !  O target.textContent só define que sera os caracteres do atingido que seram lidos pelo contador atrás dele.
 * ! E o target.parentNode faz com que seja lido apenas o pai do atingido.
 */

function contador(parametriado, pai_do_segundo_elemento_lido) {
    const peca = pai_do_segundo_elemento_lido.querySelector('[data-contagem]')
    if (parametriado === '+') {
        // *  braco.value = parseInt(braco.value) + 1
        peca.value = parseInt(peca.value) + 1
    } else if (parseInt(peca.value) > 0) {
        // *  braco.value = parseInt(braco.value) - 1
        peca.value = parseInt(peca.value) - 1
    }
}
/**
 * ! O parametriado lido pela function |contador| é o mesmo de quando ele passa a ser definido pelo parametro_que_foi_atingido_na_consequencia_do_click só que por causa do target.textContent ele passa a ler apenas os caracteres do atingido.
 * ! E o pai_do_segundo_elemento_lido é no começo a div pai daquele em si clicado sendo ela class="controle", mas o querySelector('[data-contagem]') faz com que seja o controle contador de tal div clicada.
 */

function modificaHabilidades(parametriado_da_segunda_function) {
    console.log(pecas[parametriado_da_segunda_function])

    habilidades.forEach( (habilidade_da_data) => {
        console.log(habilidade_da_data.dataset.habilidade, habilidade_da_data.textContent)
        habilidade_da_data.textContent = parseInt(habilidade_da_data.textContent) + pecas [parametriado_da_segunda_function][habilidade_da_data.dataset.habilidade]
        /**
         * ! aqui a pecas é a const pecas o [parametriado_da_segunda_function] é o atributo herdado do click e o [habilidade_da_data.dataset.habilidade] é a string do .dataset.habilidade.
         */
    })
}
/**
 * ! tal parametriado_da_segunda_function funciona da mesma maneira que o parametriado da function |contador| só que essa está direcionada a function |modificaHabilidades| que por sua vez escolheu o parametro target.dataset.atributo da 'data-atributo'.
 */

/**
 * ? function mostre() {
 * ? itens.style.display = 'block'
 * ? } 

 * * const braco = document.querySelector('#braco') 
 */