import React, {useState, useEffect} from 'react';
import { MDBContainer, MDBRow, MDBCol,MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink,MDBCard, MDBListGroup, MDBListGroupItem } from "mdbreact";
import {Redirect, withRouter} from 'react-router-dom';
import {checkAuthTokenTime} from "../../../shared/auth-service";
import {customerInfo} from "../../../shared/customer-service";
import fun from '../../../lib/function'

function CustomerInfo({toggle,state}) {

    const [items, setItems] = useState([]);

    const auth_token = fun.getItem('auth_token');

    useEffect(() => {
        const fetchItems = async () => {

            await checkAuthTokenTime();
            const items_to_table = [];
            const result = await customerInfo();
            console.log(result);
            setItems(items_to_table);
        };
        fetchItems();
    },[]);
    if(auth_token === 'null' || auth_token === null){
        return (
            <Redirect to="/login"/>
        )
    }

    return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="8">
                        <MDBNav className="nav-tabs mt-5">
                            <MDBNavItem>
                                <MDBNavLink to="#" active={state.activeItem === "1"} onClick={toggle("1")} role="tab" >
                                    Основные данные
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#" active={state.activeItem === "2"} onClick={toggle("2")} role="tab" >
                                    Конакты
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNav>
                        <MDBTabContent activeItem={state.activeItem} >
                            <MDBTabPane tabId="1" role="tabpanel">
                                <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
                                    <MDBListGroup>
                                        <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                                        <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                                        <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                                    </MDBListGroup>
                                </MDBCard>
                            </MDBTabPane>
                            <MDBTabPane tabId="2" role="tabpanel">
                                <p className="mt-2">
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
                            <MDBTabPane tabId="3" role="tabpanel">
                                <p className="mt-2">
                                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                                    voluptate odit minima. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Nihil odit magnam minima,
                                    soluta doloribus reiciendis molestiae placeat unde eos
                                    molestias.
                                </p>
                            </MDBTabPane>
                        </MDBTabContent>
                    </MDBCol>
                    <MDBCol md="4">
                        .col-md-4
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

    );
};

export default withRouter(CustomerInfo);

