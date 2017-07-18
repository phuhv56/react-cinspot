import React from 'react';
import ReactDOM from 'react-dom';
import PostList from '../containers/ListPostComponent';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }
   render() {
      return (
         <div>
            <PostList />
         </div>
      );
   }
}