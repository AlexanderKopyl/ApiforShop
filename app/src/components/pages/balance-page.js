import React, {useState, useEffect} from 'react';
import {MDBDataTable, MDBContainer} from 'mdbreact';
import {ExportCSV} from '../buttons/exports';
import {Redirect, withRouter} from 'react-router-dom';
import {authService} from '../../shared/auth-service'
import {customerService} from "../../shared/customer-service";
import fun from "../../lib/function";
import Header from "../header";


const BalancePage = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {

            await authService.checkAuthTokenTime();

            const items = await customerService.getReward();

            setItems(items);
        };

        fetchItems();
    }, []);


    const auth_token = fun.getItem('auth_token');


    if (auth_token === 'null' || auth_token === null) {
        return (
            <Redirect to="/login"/>
        )
    }

    const data = {
        columns: [
            {
                label: 'Description',
                field: 'description',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Point',
                field: 'points',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Date',
                field: 'date_added',
                sort: 'asc',
                width: 150
            }
        ],
        rows: items
    };

    return (
        <div className="box-page">
            <Header/>
            <MDBContainer>
                <ExportCSV csvData={items} fileName={"balance"}/>
                <MDBDataTable
                    striped
                    bordered
                    hover
                    data={data}
                />
            </MDBContainer>
        </div>
    );
};

export default withRouter(BalancePage);