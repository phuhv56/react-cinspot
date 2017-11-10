import React from "react";
import ReactDOM from "react-dom";
import PostList from "../containers/ListPostComponent";
import Card from "../containers/CardComponent";
import { todos } from "../redux/actions/index";

export class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {add} = this.props;
    console.log(add)
    return (
      <div>
        <Card add={add}/>
        <PostList />
      </div>
    );
  }
}
