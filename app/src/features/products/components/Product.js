import { Grid, TextareaAutosize, TextField } from '@mui/material'
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
                    <TextField fullWidth name="ref" label="Ref." variant="filled" value={product.ref ?? ''} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField fullWidth name="name" label="Name" variant="filled" value={product.name ?? ''} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField fullWidth name="price" type="number" inputProps={{ step: 0.01, min: 0 }} label="Price" variant="filled" value={product.price ?? ''} onChange={handleChange} />
                </Grid>
                <Grid item xs={12}>
                    {/* <TextField fullWidth multiline name="name" label="Name" variant="filled" value={product.name ?? ''} onChange={handleChange} /> */}
                </Grid>
            </Grid>
        </>
    )
}
