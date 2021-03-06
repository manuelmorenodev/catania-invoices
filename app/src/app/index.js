import HomeIcon from '@mui/icons-material/Home'
import { App } from './App.js'
import { HomePage } from './HomePage.js'
import './styles.css'

export const appFeature = ({ registerAction }) => {
  registerAction({
    hook: '$INIT_FEATURE',
    handler: ({ createHook, setContext }) => {
      const routes = createHook('addRoute').map($ => $[0])
      setContext('app.routes', routes)
    },
  })

  registerAction({
    hook: '$INIT_FEATURE',
    handler: ({ createHook, setContext }) => {
      const menuItems = createHook('addMenuItem').map($ => $[0])
      setContext('app.menuItems', menuItems)
    },
  })

  registerAction({
    hook: 'addRoute',
    handler: {
      path: '/',
      element: <HomePage />,
    },
  })

  registerAction({
    hook: 'addMenuItem',
    handler: {
      path: '/',
      label: 'Home',
      icon: <HomeIcon />,
    },
  })

  registerAction({
    hook: '$REACT_ROOT_COMPONENT',
    handler: {
      component: App,
    },
  })
}
