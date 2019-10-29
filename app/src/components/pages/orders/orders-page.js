import React, {useState, useEffect} from 'react';
import {MDBContainer, MDBDataTable} from 'mdbreact';
import {Redirect,withRouter} from 'react-router-dom';
import config from '../../../app.config'
import fun from '../../../lib/function'


const DatatablePage = () => {

    const auth_token = fun.getItem('auth_token');
    //<Redirect to="/login"/>;
    // console.log(auth_token);

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const user_id = fun.getItem('user_id');

    const fetchItems = async () => {
        const data = await fetch(`${config.url}orders/customer/${user_id}`,{
            headers: {
                'Authorization': 'Bearer ' + fun.getItem('auth_token')
            }
        });
        const items = await data.json();

        // console.log(items.orders_user);
        setItems(items.orders_user);
    };
    const data = {
        columns: [
            // {
            //     label: 'customer_id',
            //     field: 'customer_id',
            //     sort: 'asc',
            //     width: 100
            // },
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
                label: 'order_status_id',
                field: 'order_status_id',
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
            }
        ],
        rows: items
    };
    console.log(items);

    if(auth_token === 'null' || auth_token === null){
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