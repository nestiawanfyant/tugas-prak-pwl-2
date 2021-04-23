/* eslint-disable default-case */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer } from 'react';

const setupPixeltopBottom = { positionBoxTopBottom: 30 }
const setupPixelleftright = { positionBoxLeftRight: 30 }

const setupReducer = (state, action) => {

    if(action.type === "top"){ return { positionBoxTopBottom: state.positionBoxTopBottom + 10 }}
    if(action.type === "left"){ return { positionBoxLeftRight: state.positionBoxLeftRight + 10 }}
    if(action.type === "bottom"){ return { positionBoxTopBottom: state.positionBoxTopBottom - 10 }}
    if(action.type === "right"){ return { positionBoxLeftRight: state.positionBoxLeftRight - 10 }}
}

export default function reducer() {
    const [setupPositionTopBottom, setPositionTopBottom]      = useReducer(setupReducer, setupPixeltopBottom);
    const [setupPositionLeftRight, setPositionLeftRight]      = useReducer(setupReducer, setupPixelleftright);

    return (
        <div className="materiOneDiv3row">
            <h2> Using useReducer </h2>
            <p> Melakukan perubahan posisi pada box <br /> dengan ukuran top, right, buttom, left pada box </p>
        
            <button onClick={() => setPositionTopBottom({type: 'top'})}> Top </button>
            <button onClick={() => setPositionLeftRight({type: 'left'})}> Left </button>
            <button onClick={() => setPositionTopBottom({type: 'bottom'})}> Bottom </button>
            <button onClick={() => setPositionLeftRight({type: 'right'})}> Right </button>
    
            <br />
            <div style={{top: setupPositionTopBottom.positionBoxTopBottom, left: setupPositionLeftRight.positionBoxLeftRight, width: 130, height: 130}} className="states"></div>        
        </div>
    )
}
