
import React from 'react';
import TodoService from '../services/todoService.js'

export default class App extends React.Component{
    render(){
        var todoService = new TodoService();
        const todoItems = todoService.getTodoItems();
        
        return  (
            <div>
                <ul>
                {todoItems.map(function(value, index){
                    return <li key={value.id}>{value.task}</li>    
                })}
                </ul>
            </div>
        );
    }
} 