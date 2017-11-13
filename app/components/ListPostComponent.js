import React from 'react';
import {Post} from './PostComponent';
export class PostList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {todos, remove} = this.props;
        return (
            <div>
                {
                    todos.data.map((todo)=> {
                         return <Post todo={todo} key={todo.id} remove={remove}/>; 
                    })
                }
            </div>
        );
    }
}