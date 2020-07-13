import getShabad from '../lib/shabad'
import getRandomShabad from '../lib/randomShabad'

const SHABAD = {
  Query: {
    getShabad: async ( _, { id } ) => {
      const shabadId = id || await getRandomShabad()
      const { shabadinfo, shabad } = await getShabad( shabadId )
      const { navigation: { previous, next } } = shabadinfo

      return {
        ...shabadinfo,
        navigation: {
          previousId: previous.id,
          nextId: next.id,
        },
        lines: shabad.map( ( { line } ) => line ),
      }
    },
  },
}

export default SHABAD
