import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from './components/CardComponent';
import { Post } from './components/PostComponent';
class App extends React.Component {
   render() {
      const img = ('/app/assets/images/background1.jpg');

      return (
         <div>
            <Card />
            <Post src={img} title="Motobycle Photography"/>
         </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('app'));