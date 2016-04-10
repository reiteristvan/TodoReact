
import React from 'react';

import Task from '../components/task.jsx';

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
        var todoItems = this.state.todoItems;
        
        return  (
            <div>
                <button onClick={this.addTodoItem.bind(this)} className="btn btn-primary">Add new</button>
                <ul>
                    {todoItems.map(task =>
                        <li key={task.id}>
                            <Task task={task} onEdit={this.onEdit.bind(this)}/>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
    
    addTodoItem(){
        var item = {
           id: Math.floor(1 + Math.random() * 1000),
           description: 'Click here to modify text',
           done: false 
        };
        
        this.todoService.addTodoItem(item);
        
        this.setState({
          todoItems: this.todoService.getTodoItems()  
        });
    }
    
    onEdit(value){
        console.log(value);
        this.todoService.updateTodoItem(value);
        
        this.setState({
          todoItems: this.todoService.getTodoItems()  
        });
    }
} 