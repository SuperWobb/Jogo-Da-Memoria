const arrayCartoes = [
    {
        name: 'barn',
        img: './img/barn.png'
    },
    {
        name: 'castle',
        img: './img/castle.png'
    },
    {
        name: 'factory',
        img: './img/factory.png'
    },
    {
        name: 'family-house',
        img: './img/family-house.png'
    },
    {
        name: 'home-garage',
        img: './img/home-garage.png'
    },
    {
        name: 'hospital',
        img: './img/hospital.png'
    },
    {
        name: 'barn',
        img: './img/barn.png'
    },
    {
        name: 'castle',
        img: './img/castle.png'
    },
    {
        name: 'factory',
        img: './img/factory.png'
    },
    {
        name: 'family-house',
        img: './img/family-house.png'
    },
    {
        name: 'home-garage',
        img: './img/home-garage.png'
    },
    {
        name: 'hospital',
        img: './img/hospital.png'
    }
]

const gridDisplay = document.querySelector('#grid');
let cartaoEscolhido = [];
let cartaoEscolhidoID = [];
const resultado = document.querySelector('#result');
const cartaoCerto = [];

arrayCartoes.sort(() => 0.5-Math.random());

function criaJogo()
{
    for(let i=0; i<arrayCartoes.length;i++)
    {
        const card = document.createElement('img');
        card.setAttribute('src', './img/fundo.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', viraCartao);
        gridDisplay.appendChild(card);
    }
}
criaJogo();

function checagem()
{
    const tabuleiro = document.querySelectorAll('#grid img');
    if(cartaoEscolhidoID[0] === cartaoEscolhidoID[1])
    {
        alert('você clicou no mesmo cartão');
    }
    else if(cartaoEscolhido[0] === cartaoEscolhido [1])
    {
        tabuleiro[cartaoEscolhidoID[0]].removeEventListener('click', viraCartao);
        tabuleiro[cartaoEscolhidoID[1]].removeEventListener('click', viraCartao);
        cartaoCerto.push(cartaoEscolhido);
    } else {
        tabuleiro[cartaoEscolhidoID[0]].setAttribute('src', './img/fundo.png');
        tabuleiro[cartaoEscolhidoID[1]].setAttribute('src', './img/fundo.png');
    }
    cartaoEscolhido = [];
    cartaoEscolhidoID = [];
    resultado.textContent = cartaoCerto.length + " pontos.";

    if(cartaoCerto.length == arrayCartoes.length/2)
    {
        resultado.textContent = 'Parabéns você venceu!';
    }
}

function viraCartao()
{
    const idCartao = this.getAttribute('data-id');
    this.setAttribute('src', arrayCartoes[idCartao].img);
    cartaoEscolhido.push(arrayCartoes[idCartao].name);
    cartaoEscolhidoID.push(idCartao);
    if(cartaoEscolhido.length === 2)
    {
        setTimeout(checagem, 300);
    }
}