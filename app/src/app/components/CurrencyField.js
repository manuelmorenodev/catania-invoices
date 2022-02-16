import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { parseCurrency, formatCurrency } from '../../utils'

export const CurrencyField = props => {
  const [value, setValue] = useState('')

  const handleFocus = ({ target }) => {
    setValue(target.value.replace(/\./g, ''))
  }

  const handleBlur = ({ target }) => {
    const num = parseCurrency(target.value)
    setValue(formatCurrency(num))
    props.updateValue(num)
  }

  const handleChange = ({ target }) => {
    setValue(target.value)
  }

  const handleKeyDown = e => {
    if (e.which == 190) {
      e.preventDefault()
    }
  }

  useEffect(() => {
    setValue(formatCurrency(props.value))
  }, [props.value])

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>{props.label}</InputLabel>
      <OutlinedInput
        fullWidth
        label={props.label}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        endAdornment={<InputAdornment position="end">€</InputAdornment>}
      />
    </FormControl>
  )
}
