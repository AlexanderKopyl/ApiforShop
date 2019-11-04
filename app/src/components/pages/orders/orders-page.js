import React, {useState, useEffect} from 'react';
import {MDBBtn,MDBIcon,MDBContainer, MDBDataTable} from 'mdbreact';
import {Redirect, withRouter,Link} from 'react-router-dom';
import {checkAuthTokenTime} from "../../../shared/auth-service";
import {orders} from "../../../shared/order-service";
import fun from '../../../lib/function'


const DatatablePage = () => {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const time_token = fun.getItem('time_token'),
          auth_token = fun.getItem('auth_token'),
          now = new Date().getTime();

    if (now > time_token) {
        localStorage.clear();
    }

    const fetchItems = async () => {

        const validate = await checkAuthTokenTime();
        const items_to_table = [];
        const items = await orders();
        items.result.forEach((elem) =>{
            const {order_id, firstname, lastname, email, date_added, oc_order_status: {name}, telephone, total} = elem;
            const arrayToTable = {
                order_id,
                firstname,
                lastname,
                email,
                date_added,
                order_status:name,
                telephone,
                total,
                action:<Link to={`/orders/${elem.order_id}`}>
                    <MDBBtn color="purple" size="sm"><MDBIcon icon="eye" /></MDBBtn>
                </Link>
            };
            items_to_table.push(arrayToTable);
        });
        setItems(items_to_table);
    };


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