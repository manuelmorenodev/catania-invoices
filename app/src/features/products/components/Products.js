import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import { Box, Fab } from '@mui/material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FeatureTitle } from '../../../app/components/FeatureTitle'
import { useProducts } from '../hooks/use-products'

export const Products = () => {
  const { products, loading, error } = useProducts()
  const navigate = useNavigate()

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
    {
      field: 'actions',
      type: 'actions',
      width: 50,
      getActions: item => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={() => navigate(`/product/${item.id}`)}
          />,
        ]
      },
    },
  ]

  const errorProp = error ? { error: true } : {}

  return (
    <>
      <FeatureTitle>Products</FeatureTitle>
      <Box style={{ display: 'flex', height: '300px' }}>
        <Box style={{ flexGrow: 1 }}>
          <DataGrid
            rows={products}
            columns={columns}
            loading={loading}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            {...errorProp}
          />
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
