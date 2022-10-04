import { gql } from 'apollo-server-express'

export const User = gql`
  type User {
    name: String,
    id: Int
  }
`
