import { createContext, useState } from 'react'

export const LoginContext = createContext()

export const LoginContextProvider = ({ children }) => (
  <LoginContext.Provider value={useState(null)}>
    {children}
  </LoginContext.Provider>
)
