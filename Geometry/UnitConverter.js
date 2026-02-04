function UnitConverter(value, unitSource, unitTarget) {
    const normalizationValue = UnitNormalization(value, unitSource);
    if (isNaN(value)) return 0;
    switch(unitTarget){
        case "mm":
            return normalizationValue * 1000;
        case "cm":
            return normalizationValue * 100;
        case "dm":
            return normalizationValue * 10;
        case "m":
            return normalizationValue;
        case "dam":
            return normalizationValue / 10;
        case "hm":
            return normalizationValue / 100;
        case "km":
            return normalizationValue / 1000;
        default:
            return normalizationValue;
    }
}

function UnitNormalization(value, unitSource) {
    switch(unitSource){
        case "mm":
            return value / 1000;
        case "cm":
            return value / 100;
        case "dm":
            return value / 10;
        case "m":
            return value;
        case "dam":
            return value * 10;
        case "hm":
            return value * 100;
        case "km":
            return value * 1000;
        default:
            return value;
    }
}