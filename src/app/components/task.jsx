
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
            <div className="center-block">
                <div onClick={this.edit.bind(this)}>
                    {this.props.task.description}
                </div> 
                <button className="btn btn-success">Done</button>
            </div> 
        );
    }
    
    renderEdit(){
        return (
            <div>
                <input type="text"
                       autoFocus={true}
                       defaultValue={this.props.task.description}
                       onBlur={this.finishEdit.bind(this)}
                       onKeyPress={this.checkEnter.bind(this)} />
            </div>
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