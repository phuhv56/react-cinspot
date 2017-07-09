import React from 'react';

export class Post extends React.Component {

    constructor(props) {
        super(props);
        this.removeTodo = this.removeTodo.bind(this);
    }

    removeTodo(index) {
        console.log('post removeTodo ' + index);
        this.props.removeTodo(index);
    }

   render() {
        let priority = '';
        switch(this.props.todo.priority) {
            case 1: 
                priority = "Low";
                break;
            case 2:
                priority = "Medium";
                break;
            case 3:
                priority = "High";
                break;
            default:
                break;
        }

        let id = this.props.todo.id;
      return (
         <div className="row">
            <div className="col s12 m12">
               <div className="card hoverable">
                  <div className="card-content">
                    <span className="card-title">
                        <b>{this.props.todo.title}</b> - <i>{this.props.todo.reponsible}</i>
                    </span>
                    <div className="chip">
                        {priority}
                    </div>
                    <p>{this.props.todo.description}</p>
                  </div>
                  <div className="card-action">
                      <a onClick={this.removeTodo.bind(this, id)} className="waves-effect waves-light btn red lighten-2">  
                          <i className="material-icons">delete</i> Delete
                    </a>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

Post.propTypes = {
    todo: React.PropTypes.shape({
        title: React.PropTypes.string.isRequired,
        reponsible: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired
    })
};

Post.defaultProps = {
    name: 'About Pieces',
    reponsible: 'Alexandre Makalacova'
}