/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

class materi2 extends Component {
    state = {
        isLoading: true,
        data: []
    }

    componentWillMount = () => {
        console.log("ComponentDidmount Sedang Berjalan")
        fetch("https://pwlapilumen.herokuapp.com/webScraping") 
        .then(res => {
            if( res.status === 200 )
                return res.json()
            else
                console.log("error");
        }).then( resJson => {
            console.log("Mengatur State.data")
            this.setState({
                data: resJson,
                isLoading: false,
            })
            console.log("Success")
        })
    };

    render() {

        return (
            <div className="d-flex">
                { 
                    
                    (this.state.isLoading == false) ? 
                        this.state.data.map((datasAPI, index) => 
                            <div className="card" key={index}>
                                <a href="">
                                    <img src={datasAPI.images} width="100%" height="190"/>
                                    <h3> {datasAPI.title} </h3> 
                                    <p> {datasAPI.date} </p> 
                                </a>
                            </div>
                        ) 
                    : <div className="LoadingData"> Tunggu Sebentar... </div>
                }
            </div>
        )
    }
}

export default materi2;