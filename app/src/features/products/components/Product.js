import { Grid, TextField } from '@mui/material'
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
                <Grid item xs={12} sm={6}>
                    <TextField name="ref" label="Ref." variant="filled" value={product.ref} onChange={handleChange} />
                </Grid>
            </Grid>
        </>
    )
}
