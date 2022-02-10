import { Typography } from '@mui/material'
import React from 'react'

export const FeatureTitle = ({ children }) => {
  return (
    <Typography variant="h4" sx={{ mb: 3 }}>
      {children}
    </Typography>
  )
}
