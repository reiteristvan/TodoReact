
export default class TodoService {
    constructor(){
         this.todoItems =  [
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
    
    getTodoItems(){
        return this.todoItems;
    }
    
    addTodoItem(todoItem){
        this.todoItems.push(todoItem);
        console.log('added');
    }
}