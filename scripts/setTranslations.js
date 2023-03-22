import {dataFeed} from "./dataFeed";
import {insertPriceToString} from "./helpers";

export const setTranslations = (translations, currentLang) => {
    if (currentLang === 'ru') {
        dataFeed.mainTitle.style.fontSize = '33px'
        dataFeed.firstCardFreeDays.style.fontSize = '14px'
        dataFeed.secondCardFreeDays.style.fontSize = '14px'
    } else if (currentLang === 'fr') {
        dataFeed.firstCardFreeDays.style.fontSize = '14px'
        dataFeed.secondCardFreeDays.style.fontSize = '14px'
    }

    const monthlyPrice = '$9.99'
    const monthlyPriceStr = insertPriceToString(translations["<strong>{{price}}</strong><br>per month"], monthlyPrice)
    const bottomMonthlyPriceStr = insertPriceToString(translations["{{price}}/month"], monthlyPrice)

    const annuallyPrice = '$19.99'
    const annuallyPriceStr = insertPriceToString(translations["<strong>{{price}}</strong><br>per year"], annuallyPrice)
    const bottomAnnuallyPrice = '$1.66'
    const bottomAnnuallyPricePerMonthStr = insertPriceToString(translations[`{{price}}/month`], bottomAnnuallyPrice)

    dataFeed.mainTitle.innerHTML = translations["Unlimited Access<br>to All Features"]
    dataFeed.restore.innerHTML = translations["Restore"]
    dataFeed.firstAdvantages.innerHTML = translations["Unlimited documents"]
    dataFeed.secondAdvantages.innerHTML = translations["Export to clouds"]
    dataFeed.thirdAdvantages.innerHTML = translations["Text recognition (OCR)"]

    dataFeed.firstCardTitle.innerHTML = translations["Monthly"]
    dataFeed.firstCardPrice.innerHTML = monthlyPriceStr
    dataFeed.firstCardFreeDays.innerHTML = translations["3 DAYS FREE"]
    dataFeed.firstCardBottomPrice.innerHTML = bottomMonthlyPriceStr

    dataFeed.secondCardTitle.innerHTML = translations["Annually"]
    dataFeed.secondCardPrice.innerHTML = annuallyPriceStr
    dataFeed.secondCardFreeDays.innerHTML = translations["MOST POPULAR"]
    dataFeed.secondCardBottomPrice.innerHTML = bottomAnnuallyPricePerMonthStr

    dataFeed.btnNext.innerHTML = translations["Continue"]
    dataFeed.subBtnText.innerHTML = translations["Auto-renewable. Cancel anytime."]
    dataFeed.terms.innerHTML = translations["Terms of Use"]
    dataFeed.privacyPolicy.innerHTML = translations["Privacy Policy"]
}