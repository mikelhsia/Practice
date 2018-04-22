/**
 * Created by puppylpy on 2018/4/22.
 */
class Person {
    constructor(name) {
        this.name = name;
    }

    greet () {
        return this.name + " says hello.";
    }
}

console.log(new Person('Michael Hsia').greet());