import React, {useState, useEffect} from 'react';
import {MDBContainer, MDBDataTable} from 'mdbreact';
import {Redirect, withRouter} from 'react-router-dom';
import {authService} from "../../../shared/auth-service";
import {orderService} from "../../../shared/order-service";
import fun from '../../../lib/function'


const DatatablePage = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {

            await authService.checkAuthTokenTime();

            const items = await orderService.getAllOrdersForUser();

            setItems(items);
        };
        fetchItems();
    }, []);

    const auth_token = fun.getItem('auth_token');

    const data = {
        columns: [
            {
                label: 'Order_id',
                field: 'order_id',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Firstname',
                field: 'firstname',
                sort: 'asc',
                width: 150
            },
            {
                label: 'LastName',
                field: 'lastname',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Email',
                field: 'email',
                sort: 'asc',
                width: 200
            },
            {
                label: 'date_added',
                field: 'date_added',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Order_status',
                field: 'order_status',
                sort: 'asc',
                width: 100
            },
            {
                label: 'telephone',
                field: 'telephone',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Total',
                field: 'total',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Action',
                field: 'action',
                sort: 'asc',
                width: 100
            }
        ],
        rows: items
    };


    if (auth_token === 'null' || auth_token === null) {
        return (
            <Redirect to="/login"/>
        )
    }


    return (

        <MDBContainer>
            <MDBDataTable
                striped
                bordered
                hover
                data={data}
            />
        </MDBContainer>
    );
};

export default withRouter(DatatablePage);
