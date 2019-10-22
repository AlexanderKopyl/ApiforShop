import React, {useState, useEffect} from 'react';
import './App.css';
import Header from '../header';
import Footer from '../footer';
import {
    ContactPage,
    LoginPage,
    Orders,
    CustomerInfo,
    BalancePage,
    DocumentPage,
    ForgotPage,
    MainPage
} from "../pages";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom';

export default function App() {


      let isLoggedIn = false;

    // useEffect(() => {
    //     fetchItem();
    // }, []);

    const [result, setItem] = useState({
        images: {}
    });

    const fetchItem = async (login,password) => {
        const fetchItem = await fetch(`http://localhost:3000/customer/email/${login}/password/${password}`);
        const result = await fetchItem.json();
        setItem(result);
        console.log(result)
    };

    // state = {
    //     isLoggedIn: false
    // };

    const onLogin = (login,password) => {

        console.log('work');

    };

    const forgotPass = () => {
       console.log('Send new password');
    };


        // const { isLoggedIn } = this.state;

        return (

        <Router>

            <div className="App">
                <Header/>
                <Switch>
                    <Route path='/' exact render={() => (
                        <MainPage  isLoggedIn={isLoggedIn}/>
                    )}/>
                    <Route path="/contact" render={() => (
                        <ContactPage  isLoggedIn={isLoggedIn}/>
                    )}/>
                    <Route path="/orders"  render={() => (
                        <Orders  isLoggedIn={isLoggedIn}/>
                    )}/>
                    <Route path="/customer-info" render={() => (
                        <CustomerInfo  isLoggedIn={isLoggedIn}/>
                    )}/>
                    <Route path="/balance" render={() => (
                        <BalancePage  isLoggedIn={isLoggedIn}/>
                    )}/>
                    <Route path="/document" render={() => (
                        <DocumentPage  isLoggedIn={isLoggedIn}/>
                    )}/>
                    <Route path="/forgot" render={() => (
                        <ForgotPage  forgotPass={forgotPass}/>
                    )}/>

                    <Route path="/login" render={() => (
                            <LoginPage
                                isLoggedIn={isLoggedIn}
                                onLogin={onLogin}/>
                        )}/>
                    <Route render={() => <h2>Page not found</h2>}/>
                </Switch>
                <Footer/>
            </div>
        </Router>

    );



}

