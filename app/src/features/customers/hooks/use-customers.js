import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const QUERY_CUSTOMERS = gql`
    query getCustomers {
        customers {
            id
            name
        }
    }
`

export const useCustomers = () => {

    const [customers, setCustomers] = useState([])

    const { data, loading, error } = useQuery(QUERY_CUSTOMERS)

    useEffect(() => {

        if (data && data.customers) {
            setCustomers(data.customers.map(row => {
                return {
                    id: row.id,
                    name: row.name
                }
            }))
        }

    }, [data])

    return { customers, loading, error }

}
