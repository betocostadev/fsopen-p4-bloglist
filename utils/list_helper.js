const dummy = (blogs) => {
  return blogs.length === 0
    ? 1
    : 1
}

const totalLikes = (array) => {
  const reducer = (sum, item) => {
    return sum + item.likes
  }

  return array.length === 0
    ? 0
    : array.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  const mostLiked = Math.max(...blogs.map(e => e.likes))
  const blog = blogs.indexOf(blogs.find(e => e.likes === mostLiked))
  return blogs[blog]
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
