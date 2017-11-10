import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Card} from '../components/CardComponent';
import {addTodo} from '../redux/actions/index';

const mapStateToProps = (state) => {
  return {
       todos: state.todos
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (todo) => {dispatch(addTodo(todo))}
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card)