import { Products } from './components/Products'

export const productsFeature = ({ registerAction }) => {
    registerAction({
        hook: 'addRoute',
        handler: {
            path: '/products',
            element: <Products />,
        },
    })

    registerAction({
        hook: 'addMenuItem',
        handler: {
            path: '/products',
            label: 'Products',
        },
    })
}
