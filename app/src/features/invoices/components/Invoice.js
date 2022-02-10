import DatePicker from '@mui/lab/DatePicker'
import { Autocomplete, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { FeatureTitle } from '../../../app/components/FeatureTitle'
import { useCustomers } from '../../customers/hooks/use-customers'

export const Invoice = () => {
  const { customers } = useCustomers()
  const [date, setDate] = useState(null)

  return (
    <>
      <FeatureTitle>Invoice</FeatureTitle>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            disablePortal
            autoHighlight
            options={customers.map(customer => ({
              id: customer.id,
              label: customer.name,
            }))}
            renderInput={params => <TextField {...params} label="Customer" />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DatePicker
            label="Date"
            value={date}
            onChange={newValue => {
              setDate(newValue)
            }}
            renderInput={params => (
              <TextField {...params} sx={{ width: '100%' }} />
            )}
          />
        </Grid>
      </Grid>
    </>
  )
}
