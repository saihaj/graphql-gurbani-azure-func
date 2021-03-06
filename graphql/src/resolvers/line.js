import getLine from '../lib/line'
import getPage from '../lib/page'

const LINE = {
  Query: {
    getLine: ( _, { id } ) => getLine( id ),
    getPage: ( _, { sourceId, pageNum } ) => getPage( sourceId, pageNum ),
  },
}

export default LINE
