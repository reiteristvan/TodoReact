
export default class TodoService {
    getTodoItems(){
        return [
            { 
                id: 0,
                task: 'buy some milk',
                done: false
            },
            { 
                id: 1,
                task: 'reply emails',
                done: false
            },
            { 
                id: 2,
                task: 'finish todo app',
                done: true
            }
        ];
    }
}