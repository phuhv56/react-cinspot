import React from 'react';
import Post from './PostComponent';
export class PostList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {todos: {data, loading}, remove} = this.props;
        console.log(this.props.data);
        return (
            <div>
                {
                    data.map((todo)=> {
                        return <Post todo={todo} key={todo.id} remove={remove}/>;
                    })
                }
            </div>
        );
    }
}