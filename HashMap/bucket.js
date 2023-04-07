// A class implementation of the bucket data structure

class Bucket {
    // Initialize bucket here
    constructor() {
        this.bucket = [];
    }
    // get value from bucket
    get(key) {
        let value = -1;
        this.bucket.forEach((pair) => {
            if (pair[0] == key) value = pair[1];
        });
        return value;
    };

    // put value in bucket
    update(key, value) {
        let found = false;
        for (let i = 0; i < this.bucket.length; i++) {
            let kv = this.bucket[i];
            if (key == kv[0]) {
                this.bucket[i] = [key, value];
                found = true;
            }
        }

        if (!found) {
            this.bucket.push([key, value]);
        }
    };

    // delete value from bucket
    remove(key) {
        for (let i = 0; i < this.bucket.length; i++) {
            let kv = this.bucket[i];
            if (key == kv[0]) this.bucket.splice(i, 1);
        }
    };
}

export default Bucket;