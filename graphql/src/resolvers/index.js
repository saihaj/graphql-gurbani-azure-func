import { GraphQLDate } from 'graphql-iso-date'

import banis from './banis'
import meta from './meta'
import shabad from './shabad'
import line from './line'
import hukamnama from './hukamnama'
import search from './search'

const rootResolver = {
  Query: {
    ...banis,
    ...meta,
    ...shabad,
    ...line,
    ...hukamnama,
    ...search,
  },
  Date: GraphQLDate,
}

export default rootResolver
