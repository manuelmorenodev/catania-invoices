import { Typography } from '@mui/material'
import React from 'react'

export const FeatureTitle = ({ children }) => {
  return (
    <Typography variant="h4" gutterBottom>
      {children}
    </Typography>
  )
}
