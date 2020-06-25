import search from '../lib/search'

const SEARCH = {
  search: async ( _, { searchInputs } ) => {
    const {
      searchQuery: query,
      searchType,
      sourceId,
      writerId,
      sectionId,
      pageNum,
      limit,
    } = searchInputs

    return search( query, searchType, sourceId, writerId, sectionId, pageNum, limit )
  },
}

export default SEARCH
