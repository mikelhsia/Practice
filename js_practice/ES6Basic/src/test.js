/**
 * Created by puppylpy on 2018/5/24.
 */

/************************************************************/
/* Useful String additions */
/* string.includes()
 * string.startsWith()
 * string.endsWith()
 * string.repeat()
 * */

let heading = 'The heading is Here';

console.log("=".repeat(5) + " " + heading + " " + '='.repeat(5));


/************************************************************/
/* Array#find
 * Array#includes
 * array.fill()
 * array.entries()
 * array.keys()
 * array.values()
 * array.entries()*/
console.log([2, 4, 6, 8, 10].indexOf(8) > -1);

/* ES6Script convention */
console.log([2, 4, 6, 8, 10].includes(25));

// Array#find
console.log([2, 4, 6, 8, 10].find(item => { return item > 5;} ));
console.log([2, 4, 6, 8, 10].findIndex(item => item > 8));

class Usr {
    constructor(name, isAdmin) {
        this.name = name;
        this.isAdmin = isAdmin;
    }
}

let usrs = [new Usr("Jeffery", false),
            new Usr("Nick", true),
            new Usr("Patrick", false)
];

console.log(usrs.find(usr => usr.isAdmin).name);


/************************************************************/
/* Generators: 跟Python的generators一样 */
// The star declare that this function is a generator
function *numbers() {
    console.log("Begins");
    yield 1;
    yield 2;
    yield 3;
}

// Generators will not execute the content when first called, but return a specific object
// console.log(numbers());
let iterator = numbers();

console.log(iterator.next());
console.log(iterator.next().value);
console.log(iterator.next().value);

function *range(start, end) {
    while (start < end) {
        yield start; // paused
        start++;
    }
}

let iterator2 = range(1, 5);

// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());

// or
for (let i of iterator2) console.log(i);


// or
console.log(
    [...range(1, 5)]
);