import React from 'react';
import ReactDOM from 'react-dom';

export class Post extends React.Component {
   render() {
      return (
         <div className="row">
            <div className="col s12 m12">
               <div className="card">
                  <div className="card-image">
                     <img src={this.props.src} />
                     <span className="card-title">{this.props.title}</span>
                  </div>
                  <div className="card-content">
                     <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div className="card-action">
                     <a href="#">This is a link</a>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}