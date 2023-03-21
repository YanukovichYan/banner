import './styles/index.scss'

const langData = ['en', 'es', 'fr', 'ja', 'nl', 'ru', 'zh']

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

    if (!langData.some(langStr => langStr === lang)) {
        lang = 'en'
        newUrl.searchParams.set('lang', 'en')
        window.location.href = newUrl.href
    }

    const path = 'localizations'

    console.log('lang', lang)

    Promise.resolve(fetch(`${path}/${lang}.json`))
        .then(response => response.json())
        .then(data => {
            processData(data)
        })

}

function processData(data) {
    console.log(data)

    if (document.getElementById('btn')) {
        document.getElementById('btn').onclick = () => {
            console.log('CLICk')
        }
    }
}