import { Login } from './Login'

export const loginFeature = ({ registerAction }) => {
  registerAction({
    hook: 'addRoute',
    handler: {
      path: '/login',
      element: <Login />,
    },
  })
}
