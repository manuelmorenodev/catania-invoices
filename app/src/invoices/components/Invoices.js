import { useInvoices } from "../hooks/use-invoices";

export const Invoices = () => {

    const hola = useInvoices()

    console.log(hola);

    if (loading) {
        return 'Loading...'
    }
    if (error) {
        return 'Error...'
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