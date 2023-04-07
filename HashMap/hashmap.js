import Bucket from "./bucket.js";

class MyHashMap {
    constructor(keySpace) {
        this.keySpace = keySpace;
        this.buckets = Array(keySpace).fill(new Bucket());

    }
    // Function to add value of a given key in the
    // hash map at the relevant hash address
    put(key, value) {
        if (key == null || value == null) return null;

        let hashKey = key % this.keySpace;
        this.buckets[hashKey].update(key, value);
    };
    // Function to find value at key
    get(key) {
        if (key == null) return -1;
        let hashKey = key % this.keySpace;
        return this.buckets[hashKey].get(key);
    };
    // Function to remove key-value at key
    remove(key) {
        let hashKey = key % this.keySpace;
        this.buckets[hashKey].remove(key);
    };
}


function main() {
    let keySpace = 11,
        inputHashMap = new MyHashMap(keySpace),
        keysList = [5, 11, 12, 15, 22, 10],
        funcs = [
            "Get",
            "Get",
            "Put",
            "Get",
            "Put",
            "Get",
            "Get",
            "Remove",
            "Get",
            "Get",
            "Remove",
            "Get",
        ],
        funcKeys = [
            [5],
            [15],
            [15, 250],
            [15],
            [121, 110],
            [121],
            [10],
            [11],
            [11],
            [13],
            [13],
            [null],
        ];

    for (let i = 0; i < funcs.length; i++) {
        if (funcs[i] == "Put") {
            console.log(
                i + 1 + ".\t put(",
                funcKeys[i][0],
                ", ",
                funcKeys[i][1],
                ")"
            );
            if (!keysList.includes(funcKeys[i][0])) {
                keysList.push(funcKeys[i][0]);
            }
            inputHashMap.put(funcKeys[i][0], funcKeys[i][1]);
        } else if (funcs[i] == "Get") {
            console.log(i + 1 + ".\t get(", funcKeys[i][0], ")");
            console.log(
                "\t Value returned: ",
                inputHashMap.get(funcKeys[i][0])
            );
        } else if (funcs[i] == "Remove") {
            console.log(i + 1 + ".\t remove(", funcKeys[i][0], ")");
            inputHashMap.remove(funcKeys[i][0]);
            keysList.splice(keysList.indexOf(funcKeys[i][0]), 1);
        }
        console.log("-".repeat(100));
    }
}

main();