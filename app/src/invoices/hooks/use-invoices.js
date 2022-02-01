import { gql } from "@apollo/client";

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

export const useInvoices = () => {

    const { data, loading, error } = useQuery(QUERY_INVOICES)

    return {
        data,
        loading,
        error
    }

}