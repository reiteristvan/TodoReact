
import React from 'react';
import TodoService from '../services/todoService.js'

export default class App extends React.Component{
    render(){
        var todoService = new TodoService();
        const todoItems = todoService.getTodoItems();
        
        return  (
            <div>
                <ul>
                    {todoItems.map(task =>
                        <li key={task.id}>{task.description}</li>
                    )}
                </ul>
            </div>
        );
    }
} 