import path from 'path'
import { loadFilesSync, mergeTypeDefs } from 'graphql-tools'

const typesArray = loadFilesSync( path.join( __dirname, './types' ) )

export default mergeTypeDefs( typesArray, { all: true } )
