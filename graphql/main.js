import { ApolloServer } from 'apollo-server-azure-functions'

import { typeDefs, resolvers } from './src'

const server = new ApolloServer( { typeDefs, resolvers } )

exports.graphqlHandler = server.createHandler()
