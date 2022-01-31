import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { gql, useQuery } from '@apollo/client';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Invoices() {

    const { loading, error, data } = useQuery(gql`
        query getInvoices {
            invoices {
                id
                date
                status
                total: lines_aggregate {
                    aggregate {
                        sum {
                            amount
                        }
                    }
                }
                customer {
                    name
                    id
                }
            }
        }
    `)

    React.useEffect(() => console.log(data))

    const loadingRows = <TableRow>
        <TableCell rowSpan={5} align="center">Loading...</TableCell>
    </TableRow>

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">#</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Customer</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Ref</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ? loadingRows : data && data.invoices.map(row =>
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row" align="right">{row.id}</TableCell>
                                <TableCell>{moment(row.date).format('DD/MM/YYYY hh:mm:ss')}</TableCell>
                                <TableCell>{row.customer.id} - {row.customer.name}</TableCell>
                                <TableCell align="right">{row.total.aggregate.sum.amount}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">{row.ref}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <br/>
            <Link to="new">
                <Button variant="contained">New</Button>
            </Link>
        </>
    );
}