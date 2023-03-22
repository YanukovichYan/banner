export const insertPriceToString = (str, price) => {
    const re = '{{price}}'
    return str.replace(re, price)
}