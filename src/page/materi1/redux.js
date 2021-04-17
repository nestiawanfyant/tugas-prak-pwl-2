import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ColorSet from './redux/colorSet'

const initialState = {
    color: "#1d315a",
};

const reducer = (state = initialState, action) => {

    if(action.type === 'green') {
        return {
            ...state, 
            color: "#22aa5f",
        }
    }

    if(action.type === 'blue') {
        return {
            ...state, 
            color: "#1d315a",
        }
    }

    if(action.type === 'yellow') {
        return {
            ...state, 
            color: "#ebe659",
        }
    }

    return state;
};

const store = createStore(reducer);

export default class redux extends Component {
    render() {
        return (
            <div className="materiOneDiv3row">
                <h2> Using Redux </h2>
                <p> Melakukan penambahan serte pengurangan <br /> ukuran width dan height pada box </p> 
            
                <Provider store={store}>
                    <ColorSet />
                </Provider>

            </div>
        )
    }
}
