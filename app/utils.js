export function toDateString (date) {
  return date.toISOString().slice(0, 10)
}

export function todayIfEmpty (dateString) {
  return dateString || toDateString(new Date())
}

export function lowestDate (a, b) {
  return new Date(a) < new Date(b) ? a : b
}

export function highestDate (a, b) {
  return new Date(a) > new Date(b) ? a : b
}

export function findFirstMonday (year) {
  let date = new Date(year, 0, 1)

  while (date.getDay() !== 1) {
    date.setDate(date.getDate() + 1)
  }

  return date
}

export function generateId () {
 return 'RG' + (Math.floor(Math.random() * 1e15) + 1e12).toString(36)
  .replace(/i|o/, '').substring(0, 3).toUpperCase()
}
