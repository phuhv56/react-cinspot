import React from 'react';
import {findDOMNode} from 'react-dom';
// import '../assets/js/materialized_initialize';
import $ from 'jquery';
const style = {
   marginLeft: '10px'
}

export class Card extends React.Component {

    constructor(props) {
        super(props);
        this.createNewTodo = this.createNewTodo.bind(this);
    }

    createNewTodo(e) {
        e.preventDefault()
        let todo = {
            id: this.props.todo.length + 1,
            title: this.refs.todoName.value,
            reponsible: this.refs.todoReponsible.value,
            description: this.refs.todoDescription.value,
            priority: parseInt(this.refs.todoPriority.value)
        }
        console.log(todo);
        this.props.add(todo);
    }

   render() {
      return (
         <div className="row">
            <a className="waves-effect waves-light btn" href="#modal1" style={{marginTop: 20}}>
                <i className="material-icons left">add</i> Add todo
            </a>
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>Add new todo</h4>
                    <form>
                        <div className="row col s10 offset-s1">
                            <div className="input-field col s12">
                            <input id="todoName" type="text" ref="todoName" className="validate"/>
                            <label htmlFor="todoName">Todo Name</label>
                            </div>
                        </div>
                        <div className="row col s10 offset-s1">
                            <div className="input-field col s12">
                            <input id="todoReponsible" ref="todoReponsible" type="text" className="validate"/>
                            <label htmlFor="todoReponsible">Responsible</label>
                            </div>
                        </div>
                        <div className="row col s10 offset-s1">
                            <div className="input-field col s12">
                                <textarea id="todoDescription" ref="todoDescription" className="materialize-textarea"></textarea>
                                <label htmlFor="todoDescription">Description</label>
                            </div>
                        </div>
                        <div className="row col s10 offset-s1">
                            <div className="input-field col s12">
                                <select defaultValue="0" ref="todoPriority"> 
                                    <option disabled value="0" >Choose your option</option>
                                    <option value="1">Low</option>
                                    <option value="2">Medium</option>
                                    <option value="3">High</option>
                                </select>
                                <label>Priority</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <a type="submit" onClick={this.createNewTodo} className="modal-action modal-close waves-effect waves-light btn">Create</a>
                    <a className="modal-action modal-close waves-effect red lighten-2 waves-light btn" style={style}>Cancel</a>
                </div>
            </div>
         </div >
      );
   }
}