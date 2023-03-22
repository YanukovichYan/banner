export const languagesEnum = ['en', 'es', 'fr', 'ja', 'nl', 'ru', 'zh']

export const elementsToTranslate = [
    {key: 'Unlimited Access<br>to All Features', element: document.getElementById('main-title')},
    {key: 'Restore', element: document.getElementById('restore')},
    {key: 'Unlimited documents', element: document.getElementById('first-advantages')},
    {key: 'Export to clouds', element: document.getElementById('second-advantages')},
    {key: 'Text recognition (OCR)', element: document.getElementById('third-advantages')},

    {key: 'Monthly', element: document.getElementsByClassName('card-title')[0]},
    {
        key: '<strong>{{price}}</strong><br>per month',
        element: document.getElementsByClassName('price')[0],
        price: '$9.99'
    },
    {key: '3 DAYS FREE', element: document.getElementsByClassName('free-days')[0]},
    {key: '{{price}}/month', element: document.getElementsByClassName('bottom-price')[0], price: '$9.99'},

    {key: 'Annually', element: document.getElementsByClassName('card-title')[1]},
    {
        key: '<strong>{{price}}</strong><br>per year',
        element: document.getElementsByClassName('price')[1],
        price: '$19.99'
    },
    {key: 'MOST POPULAR', element: document.getElementsByClassName('free-days')[1]},
    {key: '{{price}}/month', element: document.getElementsByClassName('bottom-price')[1], price: '$1.66'},

    {key: 'Continue', element: document.getElementById('btn-next')},
    {key: 'Auto-renewable. Cancel anytime.', element: document.getElementById('sub-btn-text')},
    {key: 'Terms of Use', element: document.getElementById('terms')},
    {key: 'Privacy Policy', element: document.getElementById('privacy-policy')},
]

export const links = {
    apple: 'https://www.apple.com/',
    google: 'https://www.google.com/'
}