//There are 3 types of possible string mutations: character insertion, character deletion, or character substitution. 
//Write a function that accepts 2 strings and returns true if the strings are the same except for 0 or 1 mutations. Return false otherwise.

function singleMutation(str1, str2) {
    if(Math.abs(str1.length - str2.length) > 1) {
        return false;
    }

    let mutations = 0;

    for(let i = 0, j = 0; i < str1.length || j < str2.length; i++, j++) {
        if(str1[i] !== str2[j]) {
            mutations++;
            if(mutations > 1) {
                return false;
            }

            if(str1.length > str2.length) {
                j--;
            } else if(str1.length < str2.length){
                i--;
            }
        }
    }

    return true;
}

//Time Complexity: O(n)
//Space Complexity: O(1)