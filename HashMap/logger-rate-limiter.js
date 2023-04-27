// For the given stream of message requests and their timestamps as input, you must implement a logger rate limiter system that decides whether the current message request is displayed. 
// The decision depends on whether the same message has already been displayed in the last S seconds. 
// If yes, then the decision is FALSE, as this message is considered a duplicate. Otherwise, the decision is TRUE.

var RequestLogger = function (timeLimit) {
    this.requests = {};
    this.limit = timeLimit;
};

RequestLogger.prototype.messageRequestDecision = function (timestamp, request) {
    // Check if the specific request exists in the hash map or not
    // if it exists, check whether its time duration lies within the defined timestamp
    if (
        !this.requests[request] ||
        timestamp - this.requests[request] >= this.limit
    ) {
        this.requests[request] = timestamp;
        return true;
    }
    // If the request already exists within the timestamp and is identical,
    // request should be rejected, return false
    else return false;
};

function main() {
    let newRequests = new RequestLogger(8);

    let times = [1, 5, 6, 7, 15],
        messages = [
            "good morning",
            "hello world",
            "good morning",
            "good morning",
            "hello world",
        ];

    // loop to execute over the input message requests
    for (let i = 0; i < messages.length; i++) {
        console.log(i + 1 + `.\t TIme, Message: {${times[i]}, '${messages[i]}'}`);
        console.log(
            "\t Message request decision: ",
            newRequests.messageRequestDecision(times[i], messages[i])
        );
        console.log("-".repeat(100));
    }
}

main();