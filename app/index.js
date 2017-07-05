import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from './components/CardComponent';
import { Post } from './components/PostComponent';
class App extends React.Component {
   render() {
      const img = ('/app/assets/images/background1.jpg');
      const img1 = ('/app/assets/images/background2.jpg');
      const img2 = ('/app/assets/images/background3.jpg');
      return (
         <div>
            <Card />
            <Post src={img} title="Motobycle Photography" />
            <Post src={img1} title="Street Photography" />
            <Post src={img2} title="Poitrait Photography" />
         </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('app'));