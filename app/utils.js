const moment = require('moment')


export function toDate () {
  let dateTime = moment().unix()

  return moment.unix(dateTime).format('MMM DD, YYYY')
}
