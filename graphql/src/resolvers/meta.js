import { getSources, getWriters } from '../lib/meta'

const META = {
  sources: () => getSources(),
  writers: () => getWriters(),
}

export default META
