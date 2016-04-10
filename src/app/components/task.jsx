
import React from 'react';

export default class Task extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
          editing : false  
        };
    }
    
    render(){
        if(this.state.editing){
            return this.renderEdit();
        }
        
        return this.renderNormal();
    }
    
    renderNormal(){
        return (
          <div onClick={this.edit.bind(this)}>
                {this.props.task.description}
          </div>  
        );
    }
    
    renderEdit(){
        return (
            <input type="text"
                   autoFocus={true}
                   defaultValue={this.props.task.description}
                   onBlur={this.finishEdit.bind(this)}
                   onKeyPress={this.checkEnter.bind(this)} />
        );
    }
    
    edit(){
        this.setState({
            editing: true
        });
    }
    
    checkEnter(e){
        if(e.key === 'Enter'){
            this.finishEdit(e);
        }
    }
    
    finishEdit(e){
        this.props.task.description = e.target.value;
        if(this.props.onEdit){
            this.props.onEdit(this.props.task);
        }
        
        this.setState({
            editing: false
        });
    }
}