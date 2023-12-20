/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
//we can't use promise anonymous function as a other function argument it can only use once where we define a promise anonymous function
function wait(n) {
    return new Promise(function (resolves) {
        setTimeout(() => {
            resolves()
        }, n * 1000);
    });

};

module.exports = wait;


