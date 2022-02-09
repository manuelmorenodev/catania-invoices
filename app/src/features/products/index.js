import { Product } from './components/Product'
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
        hook: 'addRoute',
        handler: {
            path: '/product',
            element: <Product />,
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
