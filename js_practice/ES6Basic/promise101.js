/**
 * Created by puppylpy on 2018/5/4.
 */

// Old way of registering an action
/*
var button = document.querySelector('button');

console.log('Before');
button.onclick = function () {
    console.log('I was clicked.');
};

console.log('After');
*/

// PROMISE
// Promise is a placeholder for an action that has not yet completed or started.
// But once it's completed, then proceed the following action
/*
var timer = new Promise(function (resolve, reject) {
    // resolve and reject are the actions that you can take depends on the outcome of the operation
    // resolve();
    // reject();
    console.log('Init Promise');

    setTimeout(function () {
        console.log('Timeout done');
        resolve();
    }, 2000);
});

timer.then(function () {
    console.log('Proceed now that timer has concluded.');
});
*/

// Promise example 2
let timer = length => {
    return timer = new Promise( (resolve, reject) => {
        // resolve and reject are the actions that you can take depends on the outcome of the operation
        // resolve();
        // reject();
        console.log('Init Promise');

        setTimeout(function () {
            console.log('Timeout done');
            resolve();
        }, length);
    });
};

timer(4000).then( () => {
    alert("Timer all done!");
});