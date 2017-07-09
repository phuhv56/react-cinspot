import React from 'react';
import {Post} from './PostComponent';
export class PostList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.todos.map((todo)=> {
                        return <Post todo={todo} key={todo.id} removeTodo={this.props.removeTodo}/>;
                    })
                }
            </div>
        );
    }
}