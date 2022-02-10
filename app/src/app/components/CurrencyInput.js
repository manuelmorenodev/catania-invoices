import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import React, { useEffect, useState } from 'react'

export const CurrencyInput = props => {
  const { handleChange } = props
  const [value, setValue] = useState(props.value)

  useEffect(() => {
    handleChange()
  }, value)

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>{props.label}</InputLabel>
      <OutlinedInput
        fullWidth
        value={value}
        onChange={handleChange}
        onFocus={({ target }) => {
          const formatted = target.value.replace(/\./g, '')
          setValue(formatted !== 'NaN' ? formatted : '')
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
  )
}
