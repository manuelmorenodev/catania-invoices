import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { FeatureTitle } from '../../../app/components/FeatureTitle'
import { useProducts } from '../hooks/use-products'
import { Box, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { Link } from 'react-router-dom'

export const Products = () => {
    const { products } = useProducts()

    useEffect(() => {
        console.log('products', products)
    }, [products])

    const columns = [
        {
            field: 'id',
            headerName: '#',
            width: 65,
            type: 'number',
        },
        {
            field: 'ref',
            headerName: 'Ref.',
            width: 80,
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 200,
        },
        {
            field: 'description',
            headerName: 'Description',
            flex: 1,
        },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
        },
    ]

    return (
        <>
            <FeatureTitle>Products</FeatureTitle>
            <Box style={{ display: 'flex', height: '300px' }}>
                <Box style={{ flexGrow: 1 }}>
                    <DataGrid rows={products} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection disableSelectionOnClick />
                </Box>
            </Box>
            <Box sx={{ textAlign: 'right', my: 2 }}>
                <Link to="/product" style={{ textDecoration: 'none' }}>
                    <Fab variant="extended" color="primary" aria-label="add">
                        <AddIcon sx={{ mr: 1 }} />
                        New product
                    </Fab>
                </Link>
            </Box>
        </>
    )
}
