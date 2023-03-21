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
            processData(data, lang)
        })

}

function processData(data, lang) {
    console.log(data)

    // if (document.getElementById('btn')) {
    //     document.getElementById('btn').onclick = () => {
    //         console.log('CLICk')
    //     }
    // }

    if (lang === 'ru' ||  lang === 'fr') {
        document.getElementsByClassName('free-days')[0].style.fontSize = '15px'
        document.getElementsByClassName('free-days')[1].style.fontSize = '15px'
    }

    const price = '$9.99'

    document.getElementById('main-title').innerHTML = data["Unlimited Access<br>to All Features"]
    document.getElementById('restore').innerHTML = data["Restore"]
    document.getElementById('first-advantages').innerHTML = data["Unlimited documents"]
    document.getElementById('second-advantages').innerHTML = data["Export to clouds"]
    document.getElementById('third-advantages').innerHTML = data["Text recognition (OCR)"]

    document.getElementsByClassName('card-title')[0].innerHTML = data["Monthly"]
    document.getElementsByClassName('price')[0].innerHTML = data["<strong>{{price}}</strong><br>per month"]
    document.getElementsByClassName('free-days')[0].innerHTML = data["3 DAYS FREE"]
    document.getElementsByClassName('bottom-price')[0].innerHTML = data["{{price}}/month"]

    document.getElementsByClassName('card-title')[1].innerHTML = data["Annually"]
    document.getElementsByClassName('price')[1].innerHTML = data["<strong>{{price}}</strong><br>per year"]
    document.getElementsByClassName('free-days')[1].innerHTML = data["MOST POPULAR"]
    document.getElementsByClassName('bottom-price').innerHTML = data["{{price}}/month"]

    document.getElementById('btn-next').innerHTML = data["Continue"]
    document.getElementById('sub-btn-text').innerHTML = data["Auto-renewable. Cancel anytime."]
    document.getElementById('terms').innerHTML = data["Terms of Use"]
    document.getElementById('privacy-policy').innerHTML = data["Privacy Policy"]

}