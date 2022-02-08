import { Invoices } from './components/Invoices'
import { Invoice } from './components/Invoice'

export const invoicesFeature = ({ registerAction }) => {
    registerAction({
        hook: 'addRoute',
        handler: {
            path: '/invoices',
            element: <Invoices />,
        },
    })

    registerAction({
        hook: 'addMenuItem',
        handler: {
            path: '/invoices',
            label: 'Invoices',
        },
    })

    registerAction({
        hook: 'addRoute',
        handler: {
            path: '/invoice',
            element: <Invoice />,
        },
    })

    registerAction({
        hook: 'addMenuItem',
        handler: {
            path: '/invoice',
            label: 'Invoice',
        },
    })
}
