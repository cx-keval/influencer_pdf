import millify from "millify";

export const beautify = (value, precision = 1) => {
    // Check if the value is a valid number or can be parsed into one
    const numericValue = Number(value);

    if (isNaN(numericValue)) {
        // If it's not a valid number, return the original value
        return value;
    }

    // Check if the numericValue is within the safe integer range
    if (
        numericValue > Number.MAX_SAFE_INTEGER ||
        numericValue < Number.MIN_SAFE_INTEGER
    ) {
        return "NAN";
    }

    const formattedValue = millify(numericValue, {
        precision: precision,
        decimalSeparator: ".",
        thousandSeparator: ",",
        abbreviations: {
            thousand: "K",
            million: "M",
            billion: "B",
            trillion: "T",
        },
    });

    return formattedValue;
};

export const capitalizeWord = (word) => {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

// export const capitalizeWord = (word: string): string => {
//     if (!word) return "";
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// };
