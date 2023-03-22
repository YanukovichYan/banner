import {elementsToTranslate} from "./dataFeed";
import {insertPriceToString} from "./helpers";

export const setTranslations = (translations, currentLang) => {
    const mainTitle = document.getElementById('main-title')

    const firstCardFreeDays = document.getElementsByClassName('free-days')[0]
    const secondCardFreeDays = document.getElementsByClassName('free-days')[1]

    if (currentLang === 'ru') {
        mainTitle.style.fontSize = '33px'
        firstCardFreeDays.style.fontSize = '14px'
        secondCardFreeDays.style.fontSize = '14px'
    } else if (currentLang === 'fr') {
        firstCardFreeDays.style.fontSize = '14px'
        secondCardFreeDays.style.fontSize = '14px'
    }

    elementsToTranslate.forEach(obj => {
        if (!obj.price) {
            if (translations[obj.key]) {
                obj.element.innerHTML = translations[obj.key]
            }
        } else {
            obj.element.innerHTML = insertPriceToString(translations[obj.key], obj.price)
        }
    })
}