
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
            <div className="container">
                <button onClick={this.addTodoItem.bind(this)} className="btn btn-primary">Add new</button>
                <ul className="list-group">
                    {todoItems.map(task =>
                        <li key={task.id} className="list-group-item">
                            <Task task={task} onEdit={this.onEdit.bind(this)} onDone={this.onDone.bind(this)}/>
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
    
    onEdit(task){
        this.todoService.updateTodoItem(task);
        
        this.setState({
          todoItems: this.todoService.getTodoItems()  
        });
    }
    
    onDone(task){
        task.done = true;
        this.todoService.updateTodoItem(task);
        
        this.setState({
            todoItems: this.todoService.getTodoItems()
        });
    }
} 