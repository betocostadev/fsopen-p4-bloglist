const dummy = (blogs) => {
  return blogs.length === 0
    ? 1
    : blogs.length
}

const totalLikes = (array) => {
  const reducer = (sum, item) => {
    return sum + item.likes
  }

  return array.length === 0
    ? 0
    : array.reduce(reducer, 0)
}

module.exports = {
  dummy, totalLikes
}
