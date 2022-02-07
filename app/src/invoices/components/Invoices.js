import { useEffect } from "react";
import { useInvoices } from "../hooks/use-invoices";

export const Invoices = () => {

    const { invoices, loading, error } = useInvoices()

    useEffect(() => {
        console.log('invoices', invoices);
    }, [invoices])

    if (loading) {
        return 'Loading...'
    }

    if (error) {
        return 'Error!'
    }

    return <div>
        <h1>Invoices</h1>
        {invoices && invoices.map(invoice => (
            <div key={invoice.id}>
                <div>
                    <span>{invoice.id}: </span>
                    <span>{invoice.customer.name}</span>
                </div>
            </div>
        ))}
    </div>
}