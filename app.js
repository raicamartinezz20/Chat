'use strict'

const pessoas =[
    {
        nome: "Bianca Soares",
        mensagem: "Oi amiga, oq achou dessa foto?",
        tempo: "12:45",
        image: "bianca.jpeg"

    },
    {
        nome: "Julia Marques",
        mensagem: "Amiga vai ir hoje?",
        tempo: "11:10",
        image: "julia.jpeg"
    },
    {
        nome: "Rafael Melo",
        mensagem: "Vamos ir no Outback??",
        tempo: "13:05",
        image: "rafael.jpeg"
    },
    {
        nome: "Mãe",
        mensagem: "Filha passa seu pix, vou fazer o dinheiro do almoço.",
        tempo: "08:34",
        image: "mae.jpeg"
    }
]

const criarCard = (pessoas) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src =  `./img/${pessoas.imagem}`
    imagem.alt = pessoas.nome

    const nome = document.createElement ('h4')
    nome.textContent = pessoas.nome

    const mensagem = document.createElement('p')
    mensagem.textContent = pessoas.mensagem

    const tempo = document.createElement('p')
    tempo.textContent = pessoas.tempo

    card.appendChild(image)
    card.appendChild(nome)
    card.appendChild(mensagem)
    card.appendChild(tempo)

    return card
}

const mostrarCards = (pessoas) => {
    const cardContainer = document.getElementById('card-container')
    const card = criarCard(pessoas)
    cardContainer.appendChild(card)
}

pessoas.forEach(mostrarCards)