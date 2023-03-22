import '../styles/index.scss'
import {setTranslations} from "./setTranslations";
import {dataFeed, languagesEnum, links} from "./dataFeed";

window.onload = () => {
    let userLang = window.navigator ? window.navigator.language : 'en';
    userLang = userLang.substring(0, 2).toLowerCase();

    const baseUrl = new URL(window.location.href)

    const newUrl = new URL(baseUrl)
    newUrl.searchParams.append('lang', userLang)

    if (!baseUrl.searchParams.has('lang')) {
        window.location.href = newUrl.href
    }

    let lang = baseUrl.searchParams.get('lang')

    if (!languagesEnum.some(langStr => langStr === lang)) {
        lang = 'en'
        newUrl.searchParams.set('lang', 'en')
        window.location.href = newUrl.href
    }

    const path = 'localizations'

    Promise.resolve(fetch(`${path}/${lang}.json`))
        .then(response => response.json())
        .then(data => {
            setTranslations(data, lang)
        })

    selectionCard()
}


function selectionCard() {
    const cards = document.querySelectorAll('.card')

    let activeCard = 'first'

    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(card => card.classList.remove('active'))
            card.classList.add('active')
            activeCard = card.id
        })
    })

    dataFeed.btnNext.onclick = () => {
        activeCard === 'first' ? redirectTo(links.apple) : redirectTo(links.google)
    }

    function redirectTo(link) {
        window.open(link, '_blank');
    }
}