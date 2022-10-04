import { ApolloServer } from 'apollo-server-express'
import compression from 'compression'
import cors from 'cors'
import { createServer } from 'http'
import express from 'express'
import helmet from 'helmet'
import { makeExecutableSchema } from '@graphql-tools/schema'
import resolvers from './service/graphql/resolvers'
import schemas from './service/graphql/schemas'

const schema = makeExecutableSchema({
  typeDefs: schemas,
  resolvers,
})

const PORT = process.env.PORT || 4000
const app = express()
app.use('*', cors())
app.use(helmet())
app.use(compression())

let apolloServer = null
async function startServer() {
  apolloServer = new ApolloServer({
    schema,
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app, path: '/graphql' })
}
startServer()

const httpServer = createServer(app)

httpServer.listen({ port: PORT }, (): void =>
  console.log(`🚀GraphQL-Server is running on http://localhost:${PORT}/graphql`))
