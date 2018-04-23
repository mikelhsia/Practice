/**
 * Created by puppylpy on 2018/4/23.
 */

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

new TaskCollection([new Task(), new Task(), new Task()]).prepare();
