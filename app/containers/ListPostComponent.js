import React, {Component} from 'react';
import { connect } from 'react-redux';
import {PostList} from '../components/ListPostComponent';
import {removeTodo} from '../redux/actions/index';

const mapStateToProps = (state) => {
  return {
       todos: state.todos
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (index) => {dispatch(removeTodo(index))}
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList)