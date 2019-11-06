import React, { Component } from 'react';
import CustomerInfo from './customer-info-page'

export default class CustomerPage extends Component {

    state = {
        email:"",
        firstname:"",
        lastname:"",
        telephone:"",
        activeItem: "1"
    };

    toggle = tab => e => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    };
    updateInfo = () =>{
        let elem = document.getElementById('test-panel');

        elem.innerText = 'Work';
    };

    changeState = event => {
        this.setState({[event.target.name]: event.target.value});
    };


    render() {
        return (
            <CustomerInfo toggle={this.toggle} state={this.state} changeState={this.changeState} update={this.updateInfo}/>
        )
    }
}