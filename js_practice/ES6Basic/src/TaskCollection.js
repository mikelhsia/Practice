/**
 * Created by puppylpy on 2018/4/25.
 */

// ES2015 module: export keyword
export default class TasksCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    dump () {
        console.log(this.tasks);
    }
}


let exportDefault = 'DefaultString';
// You can export multiple data and values
export let exportFoo = 'exported Foo';

// You can export value at the end of file
// export default exportDefault;