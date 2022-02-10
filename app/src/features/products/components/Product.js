import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FeatureTitle } from '../../../app/components/FeatureTitle'

export const Product = () => {
  const [product, setProduct] = useState({})

  const handleChange = ({ target }) => {
    setProduct({ ...product, [target.name]: target.value })
  }

  useEffect(() => {
    console.log(product)
  }, [product])

  return (
    <>
      <FeatureTitle>Product</FeatureTitle>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            name="ref"
            label="Ref."
            value={product.ref ?? ''}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            name="name"
            label="Name"
            value={product.name ?? ''}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Price</InputLabel>
            <OutlinedInput
              fullWidth
              name="price"
              label="Price"
              value={product.price ?? ''}
              onChange={handleChange}
              onFocus={({ target }) => {
                const formatted = target.value.replace(/\./g, '')
                setProduct({
                  ...product,
                  price: formatted !== 'NaN' ? formatted : '',
                })
              }}
              onBlur={({ target }) => {
                const num = target.value.replace(/\./g, '').replace(/,/, '.')

                const formatted = Intl.NumberFormat('es-ES', {
                  style: 'decimal',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(num)

                setProduct({
                  ...product,
                  price: formatted !== 'NaN' ? formatted : '',
                })
              }}
              endAdornment={<InputAdornment position="end">€</InputAdornment>}
            />
          </FormControl>
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
    </>
  )
}
