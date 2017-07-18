import React, {Component} from 'react';
import { connect } from 'react-redux';
import {PostList} from '../components/ListPostComponent';
import {removeTodo} from '../redux/actions/index';

const mapStateToProps = (state) => {
  return {
       todos: state.todos
  };
}

export default connect(
    mapStateToProps,
  {
    remove: removeTodo
  }
)(PostList)