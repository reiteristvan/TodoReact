
import React from 'react';

export default class Task extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
          <div>{this.props.task.description}</div>  
        );
    }
}