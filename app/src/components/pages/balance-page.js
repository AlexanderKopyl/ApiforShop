import React, {useState, useEffect} from 'react';
import {MDBDataTable, MDBContainer} from 'mdbreact';
import {ExportCSV} from '../buttons/exports';
import {Redirect,withRouter} from 'react-router-dom';
import {checkAuthTokenTime} from "../../shared/auth-service";
import {customerReward} from "../../shared/balance-service";
import fun from "../../lib/function";


const BalancePage = () => {

    useEffect(() => {
        const fetchItems = async () => {

            await checkAuthTokenTime();
            const items_to_table = [];
            const {result} = await customerReward();
            result.forEach((elem) => {
                const {description,points,date_added} = elem;
                let date = new Date(date_added);

                const arrayToTable = {
                    description,
                    points,
                    date_added:fun.formatDate(date)
                };
                items_to_table.push(arrayToTable);
            });
            setItems(items_to_table);
        };

        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const auth_token = fun.getItem('auth_token');



    if(auth_token === 'null' || auth_token === null){
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
        <MDBContainer>
            <ExportCSV csvData={items} fileName={"balance"}/>
            <MDBDataTable
                striped
                bordered
                hover
                data={data}
            />
        </MDBContainer>
    );
};

export default withRouter(BalancePage);