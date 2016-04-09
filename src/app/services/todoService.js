
export default class TodoService {
    getTodoItems(){
        return [
            { 
                id: 0,
                description: 'buy some milk',
                done: false
            },
            { 
                id: 1,
                description: 'reply emails',
                done: false
            },
            { 
                id: 2,
                description: 'finish todo app',
                done: true
            }
        ];
    }
}