import { gql, useQuery } from "@apollo/client";
import { useInvoices } from "./hooks/use-invoices";

export const Invoices = () => {

    const data = useInvoices()

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