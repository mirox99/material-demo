import {DataGrid} from '@material-ui/data-grid';
import './dashboard.css'
import {db} from "../api/firebase";
import {useEffect, useState} from "react";

const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'first_name', headerName: 'First name', width: 130},
    {field: 'last_name', headerName: 'Last name', width: 130},
    {field: 'email', headerName: 'Email', width: 130},
    {
        field: 'age', headerName: 'Age', type: 'number', width: 90,
    },
    {
        field: 'number',
        headerName: 'number',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
    },
];

function Dashboard() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setUser(prevUsers => [...prevUsers, doc.data()])
            });
        });
    }, [])

    return (
        <div className='grid-container'>
            <h2 className='grid-header'>Users List</h2>
            <div className="grid-content">
                <DataGrid rows={users}
                          columns={columns}
                          autoHeight={true}
                          pageSize={5}
                          checkboxSelection/>
            </div>
        </div>
    );
}

export default Dashboard