import { cloneElement } from 'react'
import { useLogin } from './use-login'
import { LoginView } from './LoginView'

export const LoginRoot = ({ rootComponent }) => {
  const { needLogin, ...loginAPI } = useLogin()

  // Block the main App and render the login screen:
  if (needLogin) {
    return <LoginView {...loginAPI} />
  }

  // Render the main App and inject the login API in it:
  return cloneElement(rootComponent, loginAPI)
}
