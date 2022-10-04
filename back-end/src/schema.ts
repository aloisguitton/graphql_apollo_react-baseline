import { makeExecutableSchema } from '@graphql-tools/schema'
import resolvers from './service/graphql/resolvers'
import schemas from './service/graphql/schemas'

export const schema = makeExecutableSchema({
  typeDefs: schemas,
  resolvers,
})
