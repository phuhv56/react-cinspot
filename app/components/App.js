import React from "react";
import ReactDOM from "react-dom";
import PostList from "../containers/ListPostComponent";
import Card from "../containers/CardComponent";

export class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {todos: {data, loading}, add} = this.props;
    console.log(data);
    console.log(remove)

    return (
      <div>
        <Card todo={todos} add={add}/>
        <PostList />
      </div>
    );
  }
}
