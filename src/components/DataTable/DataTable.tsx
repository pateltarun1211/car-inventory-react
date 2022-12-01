// React imports
import React, { useState } from "react";
import { DataGrid, GridColDef, GridSelectionModel } from "@mui/x-data-grid";
import{
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material'

// Local imports
import { serverCalls } from "../../api";
import { useGetData } from "../../custom-hooks";
import { CarForm } from "../CarForm";
import { getAuth } from "firebase/auth";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'make',
        headerName: 'Make',
        width: 120,
        editable: true,
    },
    {
        field: 'model',
        headerName: 'Model',
        width: 120,
        editable: true,
    },
    {
        field: 'year',
        headerName: 'Year',
        type: 'year',
        width: 60,
        editable: true,
    },

    {
        field: 'category',
        headerName: 'Category',
        width: 100,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Price ($)',
        type: 'number',
        width: 100,
        editable: true,
    },
    {
        field: 'max_speed',
        headerName: 'Max Speed (mph)',
        width: 130,
        editable: true,
    },
    {
        field: 'zero_sixty',
        headerName: '0-60 Time(sec)',
        width: 110,
        editable: true,
    },
    {
        field: 'weight',
        headerName: 'Curb Weight (lbs)',
        width: 125,
        editable: true,
    },
    {
        field: 'color',
        headerName: 'Color',
        width: 75,
        editable: true,
    },
    {
        field: 'fuel_type',
        headerName: 'Fuel Type',
        width: 150,
        editable: true,
    },
];

interface gridData{
    data:{
        id?:string;
    }
}

export const DataTable = () => {
    let { carData, getData } = useGetData();
    let [open, setOpen] = useState(false)
    let [gridData, setData] = useState<GridSelectionModel>([])

    let handleOpen = () => {
        setOpen(true)
    }

    let handleClose = () => {
        setOpen(false)
    }

    let deleteData = () => {
        serverCalls.delete(`${gridData[0]}`)
        getData()
    }

    console.log(gridData) // a list of id's from checked rows
    //Check our local storage for authenticated user
    const myAuth = localStorage.getItem('myAuth')
    console.log(myAuth);
    //Conditionally Render DataTable for Authenticated Users
    if (myAuth== 'true'){
        return (
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={carData}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    onSelectionModelChange={(newSelectionModel) => {setData(newSelectionModel);}}
                    {...carData}
                />
                {/* Popup Functionality for Update, and Delete Button lives*/}
                <Button onClick={handleOpen}>Update</Button>
                <Button variant='contained' color="secondary" onClick={deleteData}>Delete</Button>

                {/* Dialog Open */}
                <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                    <DialogTitle id='form-dialog-title'>Update a Car</DialogTitle>
                    <DialogContent>
                    <DialogContentText>Car ID: {gridData[0]}</DialogContentText>
                        <CarForm id= {`${gridData[0]}`} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color='primary'>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    } else {
        return (
            //Hide DataTable for non-authed users
            <div>
                <h3>Please Sign In to View Your Drone Collection</h3>
            </div>
        )
    }
    
}