import { getBanis, getBaniLines } from '../lib/banis'

const BANIS = {
  Query: {
    banis: () => getBanis(),

    getBani: async ( _, { id } ) => {
      const { baniinfo, bani } = await getBaniLines( id )

      return {
        ...baniinfo,
        lines: bani.map( ( { line } ) => line ),
      }
    },

  },
}

export default BANIS
