import { gql, useQuery } from "@apollo/client";

const QUERY_INVOICES = gql`
    query GetInvoices {
        invoices {
            id
            customer {
                name
            }
        }
    }
`

export const Invoices = () => {

    const { data } = useQuery(QUERY_INVOICES)

    if (!data) {
        return 'Loading...'
    }

    return data.invoices.map(invoice => (
        <div key={invoice.id}>
            <div>
                <span>{invoice.id}: </span>
                <span>{invoice.customer.name}</span>
            </div>
            
        </div>
    ))
}