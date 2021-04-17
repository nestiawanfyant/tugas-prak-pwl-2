/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

function states() {

    const [widthBox, setWidthBox] = useState(150);

    return (
        <div className="materiOneDiv3row">
            <h2> Using useState </h2>
            <p> Melakukan penambahan serte pengurangan <br /> ukuran width dan height pada box </p>
            <button onClick={() => setWidthBox(widthBox + 10)}> Tambah Ukuran </button>
            <button onClick={() => setWidthBox(widthBox - 10)}> Kurangi Ukuran </button>

            <br />
            <div style={{width: widthBox, height: widthBox}} className="states"></div>
        </div>
    )
}

export default states;
