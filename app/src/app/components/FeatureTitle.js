import { Typography } from '@mui/material'
import React from 'react'

export const FeatureTitle = ({ children }) => {
    return (
        <Typography variant="h6" gutterBottom>
            {children}
        </Typography>
    )
}
