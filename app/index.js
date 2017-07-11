// import React from 'react';
// import ReactDOM from 'react-dom';
// import {App} from './components/App';

// ReactDOM.render(<App />, document.getElementById('app'));


import {compose, createStore, combineReducers} from 'redux';

var defaultState = {
    arr: ['Android', 'iOS', 'React Native'],
    isAdding: false
}

var arrReducer = (state = ['Android', 'iOS', 'React Native'], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.item];
        default:
            return state;
    }
}
var isAddingReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_ADDING':
            return !state;
        default:
            return state;
    }
}
var reducer = combineReducers({
    arr: arrReducer,
    isAdding: isAddingReducer
});


var store = createStore(reducer, compose(
    window.devToolsExtension? window.devToolsExtension(): f=>f
));
store.subscribe(() => console.log(store.getState()));
store.dispatch({type: 'TOGGLE_ADDING'});
store.dispatch({type: 'ADD_ITEM', item: 'Angular 2'});