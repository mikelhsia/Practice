/**
 * Created by puppylpy on 2018/4/23.
 */

/************************************************************/
/* Arrows */
class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    // Regarding the this object, if you use arrow, then it's pointing to prepare function,
    // If function keyword is using, then pointing to function itself.
    prepare() {
        // Old way of adding function
        // this.tasks.forEach(function(task){
        //     console.log(task);
        // });

        // No parenthesis if there's only one variable
        this.tasks.forEach(task => task.toGulp());      // return keyword is implicit

        // No variable, then definitely add parenthesis
        // this.tasks.forEach(() => console.log(task));

        // Add parenthesis if there're two variables
        // this.tasks.forEach((task, index) => console.log(task, index));

        this.tasks.forEach(task => task.toCool());
    }
}

class Task {
    toGulp () {
        console.log("converting to gulp");
    }

    toCool () {
        let names = ['Taylor', 'Jeffrey', 'Adam'];
        names = names.map(name => `${name} is cool.`); // Template string
        console.log(names);
    }
}

/************************************************************/
/* Default Parameters */

new TaskCollection([new Task(), new Task(), new Task()]).prepare();

function defaultDiscountRate() {
    return 0.1;
}
// function applyDiscount(cost, discount = 0.1) {
function applyDiscount(cost, discount = defaultDiscountRate()) {
    return cost - (cost * discount);
}

// console.log(applyDiscount(100, 0.3));
console.log(applyDiscount(100));

/************************************************************/
/* Rest operator, which should be placed at the end of the parameters */
function sum(...numbers) {
    // return numbers.reduce(function(prev, current) {
    //     return prev + current;
    // });
    return numbers.reduce((prev, current) => prev + current);
}

console.log(sum(1, 2, 3, 4, 5));

/************************************************************/
/* Spread operator: Spread an array into variables of function */

let nums = [1, 2 , 3, 4, 5, 6];
console.log(sum(...nums));

/************************************************************/
/* Template Strings */

let str = 'Foo';
// let template = [
// '<div class="Alert">',
//     '<p>Fpp</p>',
// '</div>'].join('');

// equal to

let template = `
<div class="Alert">
    <p>${str}</p>
</div>`

console.log(template);

/************************************************************/
/* Awesome Object Enhancements */

// Object Shorthand
function getPerson() {
    let name = 'John';
    let age = 25;

    // return {
    //     name: name,
    //     age: age
    // };
    // equal to
    // return {name, age}; // only if your property name and value variable are the same

    return {
        name,
        age,
        // great: function () {
        // function shorthand
        great () {
            // return "hello, " + this.name;
            return `Hello, ${this.name}`;
        }
    };
}

console.log((getPerson()).great());

/************************************************************/
/* object destructuring */
let data = {
    name: 'Karen',
    age: 32,
    results: ['foo', 'bar'],
    count: 30

};

// Destructuring the object into two simple variables
let {results, count} = data;

console.log(results, count);

// ES5 way
// function getData (data) {
    // var results = data.results;
    // var count = data.count;

// ES6 way
function getData ({results, count}) {
    console.log(results, count);
}
