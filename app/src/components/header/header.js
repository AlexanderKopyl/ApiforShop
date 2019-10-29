import React, {Component} from "react";
import {
    MDBContainer, MDBIcon,
    MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import './header.css';
import fun from '../../lib/function';

class Header extends Component {

    state = {
        isOpen: false,
        auth_token:fun.getItem('auth_token')
    };


    toggleCollapse = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    render() {
        const { auth_token } = this.state;
        let isAuth ;

        isAuth = !(auth_token === 'null' || auth_token === null);

        return (
            <MDBNavbar color="default-color" dark expand="md" className="mb-5">
                <MDBContainer>
                    <MDBNavbarToggler onClick={this.toggleCollapse}/>
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active>
                                <MDBNavLink to="/">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/customer-info">Личные данные</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/balance">Баланс</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/orders">Заказы</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/document">Документы</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/contact">Контакты</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                {isAuth ? <MDBNavLink to="/logout" className="logout-link"><MDBIcon icon="user"/>Выйти</MDBNavLink> :''}                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>

        );
    }
}

export default Header;
// export default Header;