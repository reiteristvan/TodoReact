
import React from 'react';
import TodoService from '../services/todoService.js'

export default class App extends React.Component {
    constructor(props){
        super(props);
        
        this.todoService = new TodoService();
        
        this.state = {
            todoItems: this.todoService.getTodoItems()    
        };
    }
    
    render(){
        console.log('render');
        var todoItems = this.state.todoItems;
        
        return  (
            <div>
                <button onClick={this.addTodoItem.bind(this)}>Add new</button>
                <ul>
                    {todoItems.map(task =>
                        <li key={task.id}>{task.description}</li>
                    )}
                </ul>
            </div>
        );
    }
    
    addTodoItem(){
        var item = {
           id: Math.floor(1 + Math.random() * 1000),
           description: 'alma',
           done: false 
        };
        
        this.todoService.addTodoItem(item);
        
        this.setState({
          todoItems: this.state.todoItems.concat(item)  
        })
    }
} 