import { gql } from 'apollo-server-express'
import { User } from './users'

const Query = gql`
    type Query {
        Users: [User]
        User(id: Int!): User
    }
`
const schemas = [Query, User]

export default schemas
