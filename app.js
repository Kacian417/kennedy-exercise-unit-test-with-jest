const fromEuroToDollar = (valueInEuros) => {
    const valueInDollars = valueInEuros * 1.07;
    console.log(valueInDollars);
    return valueInDollars;
}

const fromDollarToYen = (valueInDollars) => {
    const valueInYen = valueInDollars * 146.26;
    console.log(valueInYen);
    return valueInYen;
}

const fromYenToPound = (valueInYen) => {
    const valueInPounds = valueInYen / 179.89;
    console.log(valueInPounds);
    return valueInPounds;
}

module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound,
}