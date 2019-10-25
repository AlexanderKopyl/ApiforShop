import React, {Component} from "react";
import LoginForm from './login-form'
import {withRouter} from 'react-router-dom';
import config from '../../../app.config'
import fun from '../../../lib/function'

export default withRouter(class LoginPage extends Component{

    state = {
        email: "",
        password:"",
        isLoggedIn: false
    };


    onLogin = () => {
        const fetchItem = async (login, password) => {
            const fetchItem = await fetch(`${config.url}customer/email/${login}/password/${password}`);
            return await fetchItem.json();
        };

        fetchItem(this.state.email, this.state.password)
            .then((r) =>
            {
                if (r[0].result_code === 0){

                    this.setState({
                        isLoggedIn: true
                    });
                    fun.setCookie('auth',this.state.isLoggedIn,1);
                    fun.setCookie('customer_id',r[0].data[0].customer_id,1);
                    console.log(this.state);
                    console.log(fun.getCookie('auth'));
                }else{
                    fun.setCookie('auth',this.state.isLoggedIn,1);

                }
            }
            );
    };

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <LoginForm isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
        );
    }


});



