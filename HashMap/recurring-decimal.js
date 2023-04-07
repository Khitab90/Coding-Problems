// Given the two integer values of a fraction, numerator and denominator, implement a function taht returns
// that returns the fraction in string format. If the fractional part repeats, enclose the repeating part in parenthesis.

function fractionToDecimal(numerator, denominator) {
    let result = "",
        remainderMap = {};

    if (numerator == 0) {
        return "0";
    }

    if ((numerator < 0) ^ (denominator < 0)) {
        result += "-";

        numerator = Math.abs(numerator);
        denominator = Math.abs(denominator);
    }

    let quotient = numerator / denominator;
    let remainder = (numerator % denominator) * 10;
    result += toInteger(quotient).toString();

    if (remainder == 0) return result;
    else {
        result += ".";

        while (remainder != 0) {
            if (Object.keys(remainderMap).includes(`${remainder}`)) {
                let beginning = remainderMap[remainder];
                let left = result.substring(0, beginning);
                let right = result.substring(beginning, result.length);
                result = left + "(" + right + ")";
                return result;
            }
            remainderMap[remainder] = result.length;
            quotient = remainder / denominator;
            result += toInteger(quotient).toString();
            remainder = (remainder % denominator) * 10;
        }
        return result;
    }
}

function toInteger(x) {
    x = Number(x);
    return x < 0 ? Math.ceil(x) : Math.floor(x);
}


function main() {
    let inputs = [
        [0, 4],
        [4, 2],
        [5, 333],
        [2, 3],
        [47, 18],
        [93, 7],
        [-5, 333],
        [47, -18],
        [-4, -2],
    ];

    for (let i = 0; i < inputs.length; i++) {
        console.log(i + 1 +  `.\tInput: fractionToDecimal(${inputs[i]})`);
        let result = fractionToDecimal(inputs[i][0], inputs[i][1]);
        console.log("\tOutput:", result);
        console.log("-".repeat(100));
    }
}

main();