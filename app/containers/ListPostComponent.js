import React, {Component} from 'react';
import { connect } from 'react-redux';
import {PostList} from '../components/ListPostComponent';
import {removeTodo, addTodo} from '../redux/actions/index';

const mapStateToProps = (state) => {
  return {
       todos: state.todos
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (index) => {dispatch(removeTodo(index))},
    add: (todo) => {dispatch(addTodo(todo))}
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList)