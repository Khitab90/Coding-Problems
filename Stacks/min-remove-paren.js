// Given a string with matched and unmatched parentheses, remove the minimin number of parentheses
// so that the resulting string is a valid parenthesization.

function minRemoveParentheses(s) {
    let delimiters = [],
        builder = s;

    for (let i = 0; i < s.length; i++) {
        let val = s[i];
        if (
            delimiters.length > 0 &&
            delimiters[delimiters.length - 1][0] == "(" &&
            val == ")"
        )
            // closing parenthesis found while top of delimiters stack
            // is an opening parenthesis, so pop the
            // opening parenthesis as it's part of a pair
            delimiters.pop();
        else if (val == "(" || val == ")")
            // parenthesis found, push to delimiters stack for checking
            // against the rest of the string
            delimiters.push([val, i]);
    }

    // At this point, the delimiters stores the indices
    // that need to be removed from the input string
    while (delimiters.length > 0) {
        // compile the result string, skipping the
        // indices that need to be removed from the input
        let poppedVal = delimiters.pop();
        let index = poppedVal[1];
        builder = builder.substring(0, index) + builder.substring(index + 1, builder.length);
    }
    return builder;
}

function main() {
    let inputs = [
        "ar)ab(abc)abd(",
        "a)rt)lm(ikgh)",
        "aq)xy())qf(a(ba)q)",
        "(aw))kk())(w(aa)(bv(wt)r)",
        "(qi)(kl)((y(yt))(r(q(g)s)",
    ];
    for (let i = 0; i < inputs.length; i++) {
        console.log(i + 1 + `. Input: "${inputs[i]}"`);
        console.log(`   Valid parentheses, after minimum removal: "${minRemoveParentheses(inputs[i])}"`);
        console.log("-".repeat(100));
    }
}

main();