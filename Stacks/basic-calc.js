// Given a string containing an arithmetic expression, implement a basic calculator that evaluates the expression string. 
// The expression string can contain integer numeric values and should be able to handle the “+” and “-” operators, as well as “()” parenthesis.

var DBG = true;

function printStringWithMarkers(strn, pValue) {
    return (
        strn.substring(0, pValue) +
        "«" +
        strn[pValue] +
        "»" +
        strn.substring(pValue + 1, strn.length)
    );
}

function calculator(expression) {
    // We'll use sign_value variable to represent the
    // positive or negative operator
    var i,
        number = 0,
        operations_stack = [],
        result = 0,
        signValue = 1,
        length = expression.length;

    for (i = 0; i < length; i++) {
        var c = expression[i];
        if (DBG) {
            console.log(`\t\t${printStringWithMarkers(expression, i)}`);
            console.log(`\t\tCurrent character: '${c}'`);
        }
        // To store the consecutive digits that is 52 => 5 x 10 + 2 = 52
        if (!isNaN(parseInt(c))) {
            let temp = number;
            number = number * 10 + parseInt(c);
            if (DBG) {
                console.log(
                    "\t\tDetected digit, updating operand:",
                    temp,
                    "* 10 +",
                    parseInt(c),
                    "=",
                    number
                );
            }
        }

        // Evaluate the left expression and store the new sign value
        if ("+-".includes(c)) {
            let temp = result;
            if (DBG) {
                console.log("\t\tOperator encountered");
                console.log(
                    "\t\t\tUpdating result:",
                    result,
                    "+",
                    number,
                    "*",
                    signValue,
                    "⟶",
                    result + number * signValue
                );
                console.log("\t\t\tUpdating sign value to:", c == "-" ? -1 : 1);
                console.log("\t\t\tResetting Operand:", number, "⟶ 0");
            }
            result += number * signValue;
            signValue = c == "-" ? -1 : 1;
            number = 0;
        }

        // Push the result calculated till now and store the sign value
        else if (c == "(") {
            let old_stack = [...operations_stack];
            operations_stack.push(result);
            operations_stack.push(signValue);

            if (DBG) {
                console.log(
                    `\t\tDetected '(', push intermediate result, ${result}, and sign value, ${signValue}, to the operations_stack:`
                );
                console.log("\t\t\t", old_stack, "⟶", operations_stack);
            }
            result = 0;
            signValue = 1;
        }
        // Convert current number to positive or negative if we need
        // to perform an addition or a subtraction respectively
        // and add it to the previously calculated result
        else if (c == ")") {
            result += signValue * number;
            let old_stack = [...operations_stack];
            if (DBG) {
                console.log("\t\tCurrent result:", result);
                console.log("\t\tDetected ')', we'll pop the sign value from the operations_stack");
            }
            var popSignValue = operations_stack.pop();
            if (DBG) {
                console.log("\t\t\t", old_stack, "⟶", operations_stack);
                console.log("\t\tSign value: ", popSignValue);
            }
            let temp = result;
            result *= popSignValue;
            old_stack = [...operations_stack];
            if (DBG) {
                console.log("\t\tUpdating result:", temp, "*", popSignValue, "=", result);
                console.log("\t\tPopping from the operations_stack to get the second value");
            }
            let secondValue = operations_stack.pop();
            if (DBG) {
                console.log("\t\t\t", old_stack, "⟶", operations_stack);
                console.log("\t\tSecond value:", secondValue);
                console.log("\t\tUpdating result:", result, "+", secondValue, "=", (result + secondValue));
            }
            result += secondValue;
            if (DBG) {
                console.log("\t\tFinal result value is", result, "and operations_stack is", operations_stack);
            }
            number = 0;
        }
        if (DBG) console.log(" ");
    }
    if (DBG) {
        console.log(`\tResult: ${result} + ${number} * ${signValue} = ${result + number * signValue}`);
    }
    return result + number * signValue;
}

// Driver code
function main() {
    var input = [
            "4 + (52 - 12) + 99",
            "(31 + 7) - (5 - 2)",
            "(12 - 9 + 4) + ( 7 - 5)",
            "8 - 5 + (19 - 11) + 6 + (10 + 3)",
            "56 - 44 - (27 - 17 - 1) + 7",
        ],
        num = 1,
        i,
        length = input.length;

    for (i = 0; i < length; i++) {
        // Set to False to supress line-by-line trace
        DBG = true;
        var expression = input[i];
        console.log(num + "." + "\tGiven Expression:", expression);
        if (DBG) {
            console.log("\n\t\tProcessing...");
        }
        console.log("\tThe result is:", calculator(expression));
        num += 1;
        console.log("-".repeat(100));
    }
}

main();