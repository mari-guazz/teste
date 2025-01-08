// Seletores
// id -> apenas 1 elemento -> getElementById()
// class -> mais de 1 elemento -> querySelectorAll(.)

const data = [
    {
        url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
        number: 1,
        name: 'Bulbasaur',
        type: ['Grass', 'Poison'],
    },
    {
        url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
        number: 2,
        name: 'Ivysaur',
        type: ['Grass', 'Poison'],
    },
    {
        url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
        number: 3,
        name: 'Venusaur',
        type: ['Grass', 'Poison'],
    }
]

const divPokes = document.getElementById('pokes')

for (const element of data) {
    divPokes.innerHTML += `
    <img src="${element.url}">
    <i class="bi bi-heart-fill btn"></i>
    `
}
const btn = document.querySelectorAll('.btn')

for (const element of btn) {
    element.addEventListener('click', function () {
        if (element.classList.contains('favorito')) {
            return element.classList.remove('favorito')
        }

        element.classList.add('favorito')
    })
}