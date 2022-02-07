import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

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

            let invoices = []

            data.invoices.forEach(({id, date, customer, lines}) => {

                let invoice = {
                    id,
                    date,
                    customer: {
                        name: customer.name
                    }
                }
                
                invoices.push(invoice)
            })

            setInvoices(invoices)

        }
    }, [data])

    return { invoices, loading, error };
}
