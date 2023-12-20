/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const start = new Date();
    let difference = 0;
    return new Promise(function (resolves) {
        while (true) {
            const end = new Date();
            difference = end - start;
            if (difference == milliseconds) {
                break;
            }
            resolves();
        }
    });
}

module.exports = sleep;

module.exports = sleep;
