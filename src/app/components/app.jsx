
import React from 'react';

import Task from '../components/task.jsx';

import TodoStore from '../stores/TodoStore.js';
import { STORE_CHANGED } from '../stores/TodoStore.js';

import TodoActions from '../actions/TodoActions.js';

export default class App extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
          todoItems: TodoStore.getAll()  
        };
    }
    
    componentDidMount(){
        TodoStore.on(STORE_CHANGED, this.onStoreChange.bind(this));
    }
    
    componentWillUnMount(){
        TodoStore.removeListener(STORE_CHANGED, this.onStoreChange);
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
        TodoActions.create('Click here to modify text');
    }
    
    onEdit(task){
        TodoActions.updateDescription(task.id, task.description);
    }
    
    onDone(task){
        TodoActions.done(task.id);
    }
    
    onStoreChange(){
        this.setState({
            todoItems: TodoStore.getAll()
        })
    }
} 