import { Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';

export default function Invoice({ id }) {

    return <Paper elevation={1}>
        <Container sx={{ p: 2 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>New invoice</Typography>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={4}>
                    hola
                </Grid>
            </Grid>
        </Container>
    </Paper>;
}
