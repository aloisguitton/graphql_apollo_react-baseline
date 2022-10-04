import { user, users } from './users'

const resolvers = {
  Query: {
    Users: users,
    User: user,
  },
}

export default resolvers
