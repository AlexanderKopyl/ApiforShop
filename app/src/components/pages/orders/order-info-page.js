import React, {useState, useEffect} from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBBtn,
    MDBIcon,
    MDBCard,
    MDBListGroup,
    MDBListGroupItem
} from "mdbreact";
import {Redirect, withRouter, Link} from 'react-router-dom';
import {checkAuthTokenTime} from "../../../shared/auth-service";
import {orderInfo} from "../../../shared/order-service";
import fun from '../../../lib/function'


const OrderPageInfo = ({match}) => {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const auth_token = fun.getItem('auth_token');


    const fetchItems = async () => {

        await checkAuthTokenTime();
        const items_to_table = [];
        const {data} = await orderInfo(match);

        data.forEach((elem) => {
            const {firstname, lastname, email, date_added, oc_order_status: {name}, telephone, total, oc_order_product: products} = elem;
            const arrayToTable = {
                products,
                firstname,
                lastname,
                email,
                date_added,
                order_status: name,
                telephone,
                total,
            };
            items_to_table.push(arrayToTable);
        });
        console.log(items_to_table)
        setItems(items_to_table);
    };


    if (auth_token === 'null' || auth_token === null) {
        return (
            <Redirect to="/login"/>
        )
    }

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="4">
                    <MDBCard style={{width: "22rem", marginTop: "1rem"}}>
                            {items.map((item) => (
                                <MDBListGroup key ="user-info">
                                    <MDBListGroupItem>Имя: {item.firstname}</MDBListGroupItem>
                                    <MDBListGroupItem>Фамилия: {item.lastname}</MDBListGroupItem>
                                    <MDBListGroupItem>Email: {item.email}</MDBListGroupItem>
                                </MDBListGroup>
                            ))}
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                    <MDBCard style={{width: "22rem", marginTop: "1rem"}}>
                        {items.map((item) => (
                            <MDBListGroup key ="user-second">
                                <MDBListGroupItem>Cтатус: {item.order_status}</MDBListGroupItem>
                                <MDBListGroupItem>Телефон: {item.telephone}</MDBListGroupItem>
                                <MDBListGroupItem>Дата: {item.date_added}</MDBListGroupItem>
                            </MDBListGroup>
                        ))}
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                    <MDBCard style={{width: "22rem", marginTop: "1rem"}}>
                        {items.map((item) => (
                            <MDBListGroup key ="user-order-total">
                                <MDBListGroupItem>Итого: {item.total}</MDBListGroupItem>
                            </MDBListGroup>
                        ))}
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                    <MDBTable>
                        <MDBTableHead>
                            <tr>
                                <th>Name</th>
                                <th>Model</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {items.map(({products: item}) => (
                                <tr key={item.product_id}>
                                    <td>{item.name}</td>
                                    <td>{item.model}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                    <td>{item.total}</td>
                                </tr>
                            ))}
                        </MDBTableBody>
                    </MDBTable>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default withRouter(OrderPageInfo);