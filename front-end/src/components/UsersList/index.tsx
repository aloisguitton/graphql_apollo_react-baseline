import { GET_USERS } from '../users/index.gaphql'
import { Query } from 'utils/__generated__/resolvers-types'
import React from 'react'
import { useQuery } from '@apollo/client'

const UsersList = () => {
  const { data, error, loading } = useQuery<Query>(GET_USERS)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>ERROR</div>
  }

  return (
    <div>
      {data?.Users?.map(u => (
        <div>{u?.name}</div>
      ))}
    </div>
  )
}

export default UsersList
