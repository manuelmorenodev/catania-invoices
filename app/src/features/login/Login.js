import { gql, useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import React from 'react'
import { useEffect } from 'react'

export const Login = () => {
  const { data } = useQuery(gql`
    query GetUsers {
      users {
        username
      }
    }
  `)

  return (
    <div>
      <ul>
        {data &&
          data.users.map(({ username }) => (
            <li key={username}>
              <Link to={`http://localhost:4000/login/${username}`}>
                {username}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
