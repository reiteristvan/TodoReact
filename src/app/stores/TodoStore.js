
import AppDispatcher from '../dispatchers/AppDispatcher.js';
import { EventEmitter } from 'events';

export default class TodoStore extends EventEmitter {
    constructor(){
       super();
       
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
    
    getAll(){
        return this.todoItems;
    }
    
    add(todoItem){
        this.todoItems.push(todoItem);
        this.emit('ch');
    }
    
    update(todoItem){
        var existing = this.todoItems.find(i => i.id === todoItem.id);
        
        if(!existing){
            console.log('existing item not found');
            return;
        }
        
        existing.description = todoItem.description;
        existing.done = todoItem.done;
        
        this.emit('ch');
    }
}