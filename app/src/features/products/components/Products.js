import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box, Fab } from '@mui/material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useProducts } from '../hooks/use-products'
import { FeatureTemplate } from '../../../app/components/FeatureTemplate'
import { useConfirm } from '../../../app/hooks/use-confirm'
import { useDeleteProduct } from '../hooks/use-delete-product'

export const Products = () => {
  // Hooks
  const { products, loading, error, refetch: updateProducts } = useProducts()
  const navigate = useNavigate()
  const [confirm, openConfirm] = useConfirm()
  const [deleteProduct, deleteProductStatus] = useDeleteProduct()

  // Error to DataGrid
  const errorProp = error ? { error: true } : {}

  // Handlers
  // const confirmDeleteProduct = item => {
  //   openConfirm({
  //     title: 'Delete product',
  //     text: `Are you sure about delete the product #${item.id} (${item.row.name})?`,
  //     callback: async () => {
  //       const result = await deleteProduct({
  //         variables: {
  //           id: item.id,
  //         },
  //       })
  //       console.log(result)
  //       updateProducts()
  //     },
  //   })
  // }

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
      width: 80,
      getActions: item => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={() => navigate(`/product/${item.id}`)}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() =>
              openConfirm({
                title: 'Delete product',
                text: `Are you sure about delete the product #${item.id} (${item.row.name})?`,
                callback: async () => {
                  const result = await deleteProduct({
                    variables: {
                      id: item.id,
                    },
                  })
                  console.log(result)
                  updateProducts()
                },
              })
            }
          />,
        ]
      },
    },
  ]

  return (
    <>
      {confirm}
      <FeatureTemplate title="Products">
        <Box className="expand">
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
        <Box sx={{ textAlign: 'right', my: 2 }}>
          <Link to="/product" style={{ textDecoration: 'none' }}>
            <Fab variant="extended" color="primary" aria-label="add">
              <AddIcon sx={{ mr: 1 }} />
              New product
            </Fab>
          </Link>
        </Box>
      </FeatureTemplate>
    </>
  )
}
