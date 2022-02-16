import SaveIcon from '@mui/icons-material/Save'
import { Fab, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CurrencyInput } from '../../../app/components/CurrencyInput'
import { FeatureTitle } from '../../../app/components/FeatureTitle'
import { parseCurrency } from '../../../utils'
import { useProduct } from '../hooks/use-product'

export const Product = () => {
  const params = useParams()

  const navigate = useNavigate()

  const { product, setProduct, saveProduct, loading, error } = useProduct(
    params.id || undefined
  )

  const handleChange = ({ target }) => {
    setProduct({ ...product, [target.name]: target.value })
  }

  const handleSave = () => {
    // setProduct({
    //   ...product,
    //   price: parseCurrency(product.price),
    // })

    const result = saveProduct()
    if (result) {
      navigate('/products')
    }
  }

  useEffect(() => {
    console.log(product)
  }, [product])

  if (error) {
    return JSON.stringify(error)
  }

  return (
    <>
      <FeatureTitle>
        {product.id ? 'Update product' : 'New product'}
      </FeatureTitle>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            required
            name="ref"
            label="Ref."
            value={product.ref ?? ''}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            required
            name="name"
            label="Name"
            value={product.name ?? ''}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CurrencyInput
            label="Price *"
            name="price"
            value={product.price ?? ''}
            updateValue={value => {
              setProduct({ ...product, price: value })
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            minRows={3}
            name="description"
            label="Description"
            value={product.description ?? ''}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'right', mt: 3 }}>
        <Fab onClick={handleSave} variant="extended" color="primary">
          <SaveIcon sx={{ mr: 1 }} />
          Save
        </Fab>
      </Box>
    </>
  )
}
