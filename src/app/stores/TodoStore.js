
import AppDispatcher from '../dispatchers/AppDispatcher.js';
import { EventEmitter } from 'events';

export const STORE_CHANGED = 'storeChanged';

var _todoItems = [
            { 
                id: 0,
                description: 'buy some milk',
                done: true
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

class TodoStore extends EventEmitter {
    constructor(){
       super();
    }
    
    getAll(){
        return _todoItems;
    }
    
    add(todoItem){
        _odoItems.push(todoItem);
        this.emit(STORE_CHANGED);
    }
    
    update(todoItem){
        var existing = _todoItems.find(i => i.id === todoItem.id);
        
        if(!existing){
            console.log('existing item not found');
            return;
        }
        
        existing.description = todoItem.description;
        existing.done = todoItem.done;
        
        this.emit(STORE_CHANGED);
    }
}

var todoStore = new TodoStore();

AppDispatcher.register((action) => {
    switch(action.actionType){
        case 'new':
            console.log(action);
            var item = {
                id: Math.floor(1 + Math.random() * 1000),
                description: action.description,
                done: false 
            };
            _todoItems.push(item);
            todoStore.emit(STORE_CHANGED);          
            break;
    }
});

export default todoStore;