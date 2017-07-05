import React from 'react';
import ReactDOM from 'react-dom';

const style = {
   marginLeft: '10px'
}

export class Card extends React.Component {
   render() {
      return (
         <div className="row">
            <div className="col s12 m12">
               <div className="card">
                  <div className="card-content">
                     <span className="card-title">ADD SPOT</span>
                     <div className="row">
                        <form action="#">
                           <div className="file-field input-field" >
                              <div className="btn">
                                 <span>File</span>
                                 <input type="file" />
                              </div>
                              <div className="file-path-wrapper">
                                 <input className="file-path validate" type="text" />
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
                  <div className="card-action">
                     <a className="waves-effect waves-light btn">Create</a>
                     <a className="waves-effect red lighten-2 waves-light btn" style={style}>Cancel</a>
                  </div>
               </div>
            </div>
         </div >
      );
   }
}