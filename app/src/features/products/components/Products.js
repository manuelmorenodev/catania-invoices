import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { FeatureTitle } from '../../../app/components/FeatureTitle'
import { useProducts } from '../hooks/use-products'

export const Products = () => {
    const { products } = useProducts()

    useEffect(() => {
        console.log('products', products)
    }, [products])

    const columns = [
        {
            field: 'id',
            headerName: '#',
        },
        {
            field: 'ref',
            headerName: 'Ref.',
        },
        {
            field: 'name',
            headerName: 'Name',
        },
        {
            field: 'description',
            headerName: 'Description',
        },
        {
            field: 'price',
            headerName: 'Price',
        },
    ]

    return (
        <>
            <FeatureTitle>Products</FeatureTitle>
            <div style={{ display: 'flex', height: '300px' }}>
                <div style={{ flexGrow: 1 }}>
                    <DataGrid rows={products} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection disableSelectionOnClick />
                </div>
            </div>
        </>
    )
}
