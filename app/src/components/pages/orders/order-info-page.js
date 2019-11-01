import React, {useState, useEffect} from 'react';
import {MDBBtn,MDBIcon,MDBContainer, MDBDataTable} from 'mdbreact';
import {Redirect, withRouter,Link} from 'react-router-dom';
import config from '../../../app.config'
import fun from '../../../lib/function'


const OrderPageInfo = ({match}) => {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const user_id = fun.getItem('user_id'),
        time_token = fun.getItem('time_token'),
        auth_token = fun.getItem('auth_token'),
        time_auth_token = fun.getItem('time_auth_token'),
        now = new Date().getTime();

    if (now > time_token) {
        localStorage.clear();
    }

    const fetchItems = async () => {

        if (now > time_auth_token) {
            const refresh_token = {
                token: fun.getItem('refresh_token')
            };
            const data = await fetch(`${config.url}customers/token`, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(refresh_token),
            });

            const token = await data.json();
            fun.setItem('auth_token', token.accessToken);
        }

        const data = await fetch(`${config.url}orders/${match.params.id}`, {
            headers: {
                'Authorization': 'Bearer ' + fun.getItem('auth_token')
            }
        });

        const items = await data.json(),
            items_to_table = [{...items.result}];
        console.log(items_to_table);
        // items.result.forEach((elem) =>{
        //     let link = `/orders/${elem.order_id}`;
        //     elem.action = <a href={link}>
        //         <MDBBtn color="purple" size="sm"><MDBIcon icon="eye" /></MDBBtn>
        //     </a>;
        //     items_to_table.push(elem);
        // });

        setItems(items_to_table);
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
            <Link to="/orders">
                <MDBBtn color="purple" size="sm"><MDBIcon icon="angle-double-left" />Назад</MDBBtn>
            </Link>
        </MDBContainer>
    );
};

export default withRouter(OrderPageInfo);