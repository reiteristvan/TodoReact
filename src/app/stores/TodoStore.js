
import AppDispatcher from '../dispatchers/AppDispatcher.js';
import { EventEmitter } from 'events';

import { NEW, UPDATE, DONE } from '../actions/TodoActions.js';

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
    
    add(description){
        var item = {
            id: Math.floor(1 + Math.random() * 1000),
            description: description,
            done: false 
        };
        
        _todoItems.push(item);
        this.emit(STORE_CHANGED);
    }
    
    update(id, description){
        var existing = _todoItems.find(i => i.id === id);
        
        if(!existing){
            console.log('existing item not found');
            return;
        }
        
        existing.description = description;
        
        this.emit(STORE_CHANGED);
    }
    
    done(id){
        var existing = _todoItems.find(i => i.id === id);
        
        if(!existing){
            console.log('existing item not found');
            return;
        }
        
        existing.done = true;
        
        this.emit(STORE_CHANGED);
    }
}

var todoStore = new TodoStore();

AppDispatcher.register((action) => {
    switch(action.actionType){
        case NEW:
            todoStore.add(action.description);          
            break;
        case UPDATE:
            todoStore.update(action.description);
            break;
        case DONE:
            todoStore.done(action.id);
            break;
    }
});

export default todoStore;