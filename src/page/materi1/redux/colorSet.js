/* eslint-disable no-undef */
import React from 'react'
import { connect } from 'react-redux';

function colorSet(props) {
    return (
        <div className="materiOneDiv3row">
            <button onClick={props.pressGreen}> Green </button>
            <button onClick={props.pressBlue}>Blue</button>
            <button onClick={props.pressYellow}>Yellow</button>

            <br />
            <div style={{width: 150, height: 150, backgroundColor: props.color, marginTop: 20}} className="states"></div>
        </div>
    )
}

const mapsStateToProps = (state) => {
    return {
        color: state.color,
    }
}

const mapsDispatchtoProps = (dispatch) => {
    return {
        pressGreen: () => dispatch({type: 'green'}),
        pressBlue: () => dispatch({type: 'blue'}),
        pressYellow: () => dispatch({type: 'yellow'})
    }
}

export default connect(mapsStateToProps, mapsDispatchtoProps)(colorSet);
