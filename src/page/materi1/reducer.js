/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

export default function reducer() {
    const [positionBoxTopBottom, setPositionBoxTop]      = useState(30);
    const [positionBoxLeftRight, setPositionBoxLeft]     = useState(30);

    return (
        <div className="materiOneDiv3row">
            <h2> Using useReducer </h2>
            <p> Melakukan perubahan posisi pada box <br /> dengan ukuran top, right, buttom, left pada box </p>
        
            <button onClick={() => setPositionBoxTop(positionBoxTopBottom + 10)}> Top </button>
            <button onClick={() => setPositionBoxLeft(positionBoxLeftRight + 10)}> Left </button>
            <button onClick={() => setPositionBoxTop(positionBoxTopBottom - 10)}> Bottom </button>
            <button onClick={() => setPositionBoxLeft(positionBoxLeftRight - 10)}> Right </button>

            <br />
            <div style={{top: positionBoxTopBottom, left: positionBoxLeftRight, width: 130, height: 130}} className="states"></div>        
        </div>
    )
}
