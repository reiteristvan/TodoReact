
import React from 'react';

import Task from '../components/task.jsx';

import TodoStore from '../stores/TodoStore.js';
import { STORE_CHANGED } from '../stores/TodoStore.js';

export default class App extends React.Component {
    constructor(props){
        super(props);
        
        this.todoStore = new TodoStore();

        this.state = {
          todoItems: this.todoStore.getAll()  
        };
    }
    
    componentDidMount(){
        this.todoStore.on(STORE_CHANGED, this.onStoreChange.bind(this));
    }
    
    componentWillUnMount(){
        this.todoStore.removeListener(STORE_CHANGED, this.onStoreChange);
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
        
        this.todoStore.add(item);
    }
    
    onEdit(task){
        this.todoStore.update(task);
    }
    
    onDone(task){
        task.done = true;
        this.todoStore.update(task);
    }
    
    onStoreChange(){
        this.setState({
            todoItems: this.todoStore.getAll()
        })
    }
} 