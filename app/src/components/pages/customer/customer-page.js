import React, { Component } from 'react';
import CustomerInfo from './customer-info-page'

export default class CustomerPage extends Component {
    state = {
        activeItem: "1"
    };

    toggle = tab => e => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    };

    changeState = () => {

    };

    render() {
        return (
            <CustomerInfo toggle={this.toggle} state={this.state}/>
        )
    }
}