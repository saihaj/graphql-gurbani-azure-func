import { getSources, getWriters } from '../lib/meta'

const META = {
  Query: {
    sources: () => getSources(),
    writers: () => getWriters(),
  },
}

export default META
