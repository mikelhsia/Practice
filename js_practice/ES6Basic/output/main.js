'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TaskCollection = require('./TaskCollection');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by puppylpy on 2018/4/23.
 */

/************************************************************/
/* Arrows */
var TaskCollection = function () {
    function TaskCollection() {
        var tasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, TaskCollection);

        this.tasks = tasks;
    }

    // Regarding the this object, if you use arrow, then it's pointing to prepare function,
    // If function keyword is using, then pointing to function itself.


    _createClass(TaskCollection, [{
        key: 'prepare',
        value: function prepare() {
            // Old way of adding function
            // this.tasks.forEach(function(task){
            //     console.log(task);
            // });

            // No parenthesis if there's only one variable
            this.tasks.forEach(function (task) {
                return task.toGulp();
            }); // return keyword is implicit

            // No variable, then definitely add parenthesis
            // this.tasks.forEach(() => console.log(task));

            // Add parenthesis if there're two variables
            // this.tasks.forEach((task, index) => console.log(task, index));

            this.tasks.forEach(function (task) {
                return task.toCool();
            });
        }
    }]);

    return TaskCollection;
}();

var Task = function () {
    function Task() {
        _classCallCheck(this, Task);
    }

    _createClass(Task, [{
        key: 'toGulp',
        value: function toGulp() {
            console.log("converting to gulp");
        }
    }, {
        key: 'toCool',
        value: function toCool() {
            var names = ['Taylor', 'Jeffrey', 'Adam'];
            names = names.map(function (name) {
                return name + ' is cool.';
            }); // Template string
            console.log(names);
        }
    }]);

    return Task;
}();

/************************************************************/
/* Default Parameters */

new TaskCollection([new Task(), new Task(), new Task()]).prepare();

function defaultDiscountRate() {
    return 0.1;
}
// function applyDiscount(cost, discount = 0.1) {
function applyDiscount(cost) {
    var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDiscountRate();

    return cost - cost * discount;
}

// console.log(applyDiscount(100, 0.3));
console.log(applyDiscount(100));

/************************************************************/
/* Rest operator, which should be placed at the end of the parameters */
function sum() {
    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
        numbers[_key] = arguments[_key];
    }

    // return numbers.reduce(function(prev, current) {
    //     return prev + current;
    // });
    return numbers.reduce(function (prev, current) {
        return prev + current;
    });
}

console.log(sum(1, 2, 3, 4, 5));

/************************************************************/
/* Spread operator: Spread an array into variables of function */

var nums = [1, 2, 3, 4, 5, 6];
console.log(sum.apply(undefined, nums));

/************************************************************/
/* Template Strings */

var str = 'Foo';
// let template = [
// '<div class="Alert">',
//     '<p>Fpp</p>',
// '</div>'].join('');

// equal to

var template = '\n<div class="Alert">\n    <p>' + str + '</p>\n</div>';

console.log(template);

/************************************************************/
/* Awesome Object Enhancements */

// Object Shorthand
function getPerson() {
    var name = 'John';
    var age = 25;

    // return {
    //     name: name,
    //     age: age
    // };
    // equal to
    // return {name, age}; // only if your property name and value variable are the same

    return {
        name: name,
        age: age,
        // great: function () {
        // function shorthand
        great: function great() {
            // return "hello, " + this.name;
            return 'Hello, ' + this.name;
        }
    };
}

console.log(getPerson().great());

/************************************************************/
/* object destructuring */
var data = {
    name: 'Karen',
    age: 32,
    results: ['foo', 'bar'],
    count: 30

};

// Destructuring the object into two simple variables
var results = data.results,
    count = data.count;


console.log(results, count);

// ES5 way
// function getData (data) {
// var results = data.results;
// var count = data.count;

// ES6 way
function getData(_ref) {
    var results = _ref.results,
        count = _ref.count;

    console.log(results, count);
}

/************************************************************/
/* Classes */

// ES 5
/*
function User (username, email) {
    this.username = username;
    this.email = email;

    // this.changeEmail = function () {  ...  }
}

User.prototype.changeEmail = function (newEmail) {
    this.email = newEmail;
};

var user = new User('JeffreWay', 'support@laracasts.com');

user.changeEmail('foo@example.com');

console.dir(user);
*/

// ES 6

var User = function () {
    // Don't need to assign class variable, but use language similar to backend language
    function User(username, email) {
        _classCallCheck(this, User);

        this.username = username;
        this.email = email;
    }

    _createClass(User, [{
        key: 'changeEmail',
        value: function changeEmail(newEmail) {
            this.email = newEmail;
        }
    }, {
        key: 'foo',


        // get and set accessors.
        // could be used for computed properties
        get: function get() {
            return "foo";
        }
    }, {
        key: 'setUsername',
        set: function set(username) {
            this.username = username;
        }
    }], [{
        key: 'regsiter',
        value: function regsiter() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            return new (Function.prototype.bind.apply(User, [null].concat(args)))();
        }
    }]);

    return User;
}();

// let user = new User("JeffreWay", 'support@laracasts.com');


var user = User.regsiter("JeffreWay", 'support@laracasts.com');

// user.changeEmail("foo@example.com");

console.dir(user);
console.log(user.foo());

// classes are first class citizens, therefore they can be used as values, practically anywhere
function log(strategy) {
    strategy.handle();
}

// log(new class {
//     handle() {
//         alert('Using the alert strategy to log');
//     }
// });

// or

var consoleLogger = function () {
    function consoleLogger() {
        _classCallCheck(this, consoleLogger);
    }

    _createClass(consoleLogger, [{
        key: 'handle',
        value: function handle() {
            console.log('Using console strategy to log');
        }
    }]);

    return consoleLogger;
}();

var alertLogger = function () {
    function alertLogger() {
        _classCallCheck(this, alertLogger);
    }

    _createClass(alertLogger, [{
        key: 'handle',
        value: function handle() {
            alert('Using alert strategy to log');
        }
    }]);

    return alertLogger;
}();

log(new consoleLogger());

/************************************************************/
/* ES2015 module: export keyword */
/* However, current browser doesn't support ES6 out of the box
 * Therefore you need to introduce a middleman to compile both files into one
 * */

new _TaskCollection.TasksCollection(['Go to the store', 'Finish screencast', 'Eat cake']).dump();