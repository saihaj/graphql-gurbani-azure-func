import path from 'path'
import {
  mergeTypeDefs,
  loadFilesSync,
  mergeResolvers,
} from 'graphql-tools'

export const typeDefs = mergeTypeDefs(
  loadFilesSync(
    path.join( __dirname, './schema' ),
    { extensions: [ 'gql', 'graphql' ] },
  ),
  { all: true },
)

export const resolvers = mergeResolvers(
  loadFilesSync(
    path.join( __dirname, './resolvers' ),
    { extensions: [ 'js' ] },
  ),
)
