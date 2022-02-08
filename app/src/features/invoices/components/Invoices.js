import { useEffect } from 'react'
import { FeatureTitle } from '../../../app/components/FeatureTitle'
import { useInvoices } from '../hooks/use-invoices'

export const Invoices = () => {
    const { invoices, loading, error } = useInvoices()

    useEffect(() => {
        console.log('invoices', invoices)
    }, [invoices])

    if (loading) {
        return 'Loading...'
    }

    if (error) {
        return 'Error!'
    }

    return (
        <>
            <FeatureTitle>Invoices</FeatureTitle>
            {invoices &&
                invoices.map((invoice) => (
                    <div key={invoice.id}>
                        <div>
                            <span>{invoice.id}: </span>
                            <span>{invoice.customer.name}</span>
                        </div>
                    </div>
                ))}
        </>
    )
}
