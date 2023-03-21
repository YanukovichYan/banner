// const path = 'localizations'
//
// Promise.all([
//     fetch(`${path}/en.json`),
//     fetch(`${path}/es.json`),
//     fetch(`${path}/fr.json`),
//     fetch(`${path}/ja.json`),
//     fetch(`${path}/nl.json`),
//     fetch(`${path}/ru.json`),
//     fetch(`${path}/zh.json`),
// ])
//     .then(async (response) => {
//         const data = []
//         for (const lang of response) {
//             // console.log(lang)
//             data.push(await lang.json())
//         }
//         return data
//     })
//     .then(data => data)
// // .then(data => console.log(data))