
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
    }
    
    updateTodoItem(todoItem){
        var existing = this.todoItems.find(i => i.id === todoItem.id);
        
        if(!existing){
            console.log('existing item not found');
            return;
        }
        
        existing.description = todoItem.description;
        existing.done = todoItem.done;
    }
}