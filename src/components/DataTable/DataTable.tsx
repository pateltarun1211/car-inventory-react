import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 180,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.make || ''} ${params.row.model || ''}`,
    },
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
        field: 'maxSpeed',
        headerName: 'Max Speed (mph)',
        type: 'number',
        width: 130,
        editable: true,
    },
    {
        field: 'zeroSixty',
        headerName: '0-60 Time(sec)',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'weight',
        headerName: 'Curb Weight (lbs)',
        type: 'number',
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
        field: 'fuelType',
        headerName: 'Fuel Type',
        width: 150,
        editable: true,
    },
];

const rows = [
    { id: 1, make: 'Rimac', model: 'Nevera', year: 2023, category: 'Hypercar', price: 2050000, maxSpeed: 258, zeroSixty: 1.85, weight: 4740, color: 'Silver', fuelType: 'Electric'},
    { id: 2, make: 'Ferrari', model: 'SF90 Stradale', year: 2022, category: 'Hypercar', price: 625000, maxSpeed: 211, zeroSixty: 2.5, weight: 3461, color: 'Silver', fuelType: 'Gas'},
    { id: 3, make: 'Polestar', model: '2', year: 2023, category: 'Sedan', price: 75000, maxSpeed: 127, zeroSixty: 4.5, weight: 4650, color: 'Midnight', fuelType: 'Electric'},
    { id: 4, make: 'Audi', model: 'A6', year: 2012, category: 'Sedan', price: 60000, maxSpeed: 155, zeroSixty: 5.1, weight: 4000, color: 'Black', fuelType: 'Gas'},
];

export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </div>
    )
}