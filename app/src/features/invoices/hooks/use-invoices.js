import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

const QUERY_INVOICES = gql`
    query getInvoices {
        invoices {
            id
            date
            status
            customer {
                name
            }
            lines {
                item
                amount
                price
            }
        }
    }
`

export const useInvoices = () => {
    const [invoices, setInvoices] = useState([])

    const { data, loading, error } = useQuery(QUERY_INVOICES)

    useEffect(() => {
        if (data && data.invoices) {
            setInvoices(data.invoices)
        }
    }, [data])

    return { invoices, loading, error }
}
