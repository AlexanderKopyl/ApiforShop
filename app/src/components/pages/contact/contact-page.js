import React, {Component} from "react";
import ContactPageForm from './contact-page-form'
import {withRouter} from 'react-router-dom';
import {authService} from '../../../shared/auth-service'
import Header from "../../header";
import Footer from "../../footer";

export default withRouter(class ContactPage extends Component {

    state = {
        name: "",
        email: "",
        subject: "",
        text: ""
    };


    sendMessage = async () => {
        await authService.checkAuthTokenTime();
        console.log(this.state);
    };

    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        return (
            <div className="box-page">
                <Header/>
                <ContactPageForm sendMessage={this.sendMessage} changeHandler={this.changeHandler}
                                 submitHandler={this.submitHandler}/>
                <Footer/>
            </div>
        );
    }
})