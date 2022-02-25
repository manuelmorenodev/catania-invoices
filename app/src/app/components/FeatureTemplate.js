import React from 'react'

import Box from '@mui/material/Box'
import { FeatureTitle } from './FeatureTitle'

export const FeatureTemplate = ({ title, children }) => {
  return (
    <Box className="expand">
      {title && <FeatureTitle>{title}</FeatureTitle>}
      <Box className="expand">{children}</Box>
    </Box>
  )
}
