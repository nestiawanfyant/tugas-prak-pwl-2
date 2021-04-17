import React, { Component } from 'react';

// data 
import States from "./materi1/states";
import Reducer from "./materi1/reducer";
import Redux from "./materi1/redux";

export default class materi1 extends Component {
    render() {
        return (
            <div id="materiOne" className="rowsContent">
                <div className="rowMateri1">
                    <States />
                </div>
                <div className="rowMateri1">
                    <Reducer />
                </div>
                <div className="rowMateri1">
                    <Redux />
                </div>
            </div>
        )
    }
}
