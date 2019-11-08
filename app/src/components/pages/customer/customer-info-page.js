import React, {useState, useEffect} from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBTabPane,
    MDBTabContent,
    MDBNav,
    MDBNavItem,
    MDBNavLink,
    MDBCard,
    MDBListGroup,
    MDBListGroupItem,
    MDBBtn,
    MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInputGroup
} from "mdbreact";
import {Redirect, withRouter} from 'react-router-dom';
import {authService} from "../../../shared/auth-service";
import {customerService} from "../../../shared/customer-service";
import fun from '../../../lib/function'

function CustomerInfo({toggle, state, update, changeState, setStateFromSevice, modal}) {

    const [items, setItems] = useState([]);

    const auth_token = fun.getItem('auth_token');

    useEffect(() => {
        const fetchItems = async () => {

            await authService.checkAuthTokenTime();
            const result = await customerService.getInfo();
            setStateFromSevice(result);
            setItems(result);
        };
        fetchItems();
    }, [setStateFromSevice]);

    if (auth_token === 'null' || auth_token === null) {
        return (
            <Redirect to="/login"/>
        )
    }

    return (
        <MDBContainer>
            <MDBModal isOpen={state.modal} toggle={modal}>
                <MDBModalHeader toggle={modal}>MDBModal title</MDBModalHeader>
                <MDBModalBody>
                    {items.map((r) => (
                        <div key="modal-user">
                            <MDBInputGroup containerClassName="mb-3" value={r.firstname} prepend="Firstname" size="sm"/>
                            <MDBInputGroup containerClassName="mb-3" value={r.lastname} prepend="Lastname" size="sm"/>
                            <MDBInputGroup containerClassName="mb-3" value={r.email} prepend="Email" size="sm"/>
                            <MDBInputGroup containerClassName="mb-3" value={r.telephone} prepend="Telephone" size="sm"/>
                        </div>
                    ))}
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={modal}>Close</MDBBtn>
                    <MDBBtn color="primary">Save changes</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
            <MDBRow>
                <MDBCol md="12">
                    <MDBNav className="nav-tabs mt-5">
                        <MDBNavItem>
                            <MDBNavLink to="#" active={state.activeItem === "1"} onClick={toggle("1")} role="tab">
                                Основные данные
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#" active={state.activeItem === "2"} onClick={toggle("2")} role="tab">
                                Конакты
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNav>
                    <MDBTabContent activeItem={state.activeItem}>
                        <MDBTabPane tabId="1" role="tabpanel">
                            <MDBRow>
                                <MDBCol md="4">
                                    <MDBCard style={{width: "22rem", marginTop: "1rem"}}>
                                        {items.map((r) => (
                                            <MDBListGroup key={r.customer_id}>
                                                <MDBListGroupItem key="firstname">Имя:{r.firstname}</MDBListGroupItem>
                                                <MDBListGroupItem key="lastname">Фамилия:{r.lastname}</MDBListGroupItem>
                                                <MDBListGroupItem key="email">Почта:{r.email}</MDBListGroupItem>
                                                <MDBListGroupItem
                                                    key="telephone">Telephone:{r.telephone}</MDBListGroupItem>
                                            </MDBListGroup>
                                        ))}
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol md="6">
                                    <MDBListGroupItem><MDBBtn rounded color="info" onClick={modal}>Поменять
                                        данные</MDBBtn></MDBListGroupItem>
                                </MDBCol>
                            </MDBRow>
                        </MDBTabPane>
                        <MDBTabPane tabId="2" role="tabpanel">
                            <p className="mt-2" id="test-panel">
                                Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                                voluptate odit minima. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Nihil odit magnam minima,
                                soluta doloribus reiciendis molestiae placeat unde eos
                                molestias.
                            </p>
                            <p>
                                Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                                voluptate odit minima. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Nihil odit magnam minima,
                                soluta doloribus reiciendis molestiae placeat unde eos
                                molestias.
                            </p>
                        </MDBTabPane>
                    </MDBTabContent>
                </MDBCol>

            </MDBRow>
        </MDBContainer>

    );
};

export default withRouter(CustomerInfo);

