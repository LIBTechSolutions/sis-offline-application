function generateId () {
 return 'ST' + (Math.floor(Math.random() * 1e15) + 1e12).toString(36)
  .replace(/i|o/, '').substring(0, 3).toUpperCase()
}

console.log(generateId());
