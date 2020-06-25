import moment from 'moment'
import getHukamnama from '../lib/hukamnama'

const Hukamnama = {
  getHukamnama: ( _, { date } ) => getHukamnama( new Date( moment( date ).format( 'YYYY MM DD' ) ) ),
}

export default Hukamnama
