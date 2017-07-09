import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from './CardComponent';
import { Post } from './PostComponent';
import {PostList} from './ListPostComponent';

const toDos = [
    {
        id: 1,
        title: 'Motobycle Photography',
        reponsible: 'Tom Cleveley',
        description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
        priority: 3
    },
    {
        id: 2,
        title: 'Street Photography',
        reponsible: 'Asenwe Diabi',
        description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
        priority: 2
    },
    {
        id: 3,
        title: 'Foods Photography',
        reponsible: 'Adam Jonhson',
        description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
        priority: 1
    },
    {
        id: 4,
        title: 'Life Photography',
        reponsible: 'Holly Malawy',
        description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
        priority: 3
    }
]

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: toDos
        }
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(todo) {
        this.state.todos.push(todo);
        this.setState(this.state);
    }

    removeTodo(index) {
        console.log('app removeTodo ' + index);
        let todosTemp = this.state.todos.filter((e, i)=>e.id!==index);
        this.setState({todos: todosTemp});
    }

   render() {
      return (
         <div>
            <Card addTodo={this.addTodo} currentId={this.state.todos.length}/>
            <div className="collection hoverable">
                <h5 className="collection-item"><span className="badge">{this.state.todos.length} items</span>Total count: </h5>
            </div>
            <PostList todos={this.state.todos} removeTodo={this.removeTodo}/>
         </div>
      );
   }
}