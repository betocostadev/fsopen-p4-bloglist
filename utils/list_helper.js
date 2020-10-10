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

const mostBlogs = (blogs) => {
  const authors = blogs.map(e => e.author)
  const uniqueAuthors = authors.filter((val, i) => authors.indexOf(val) === i)
  const authorsAndPosts = uniqueAuthors.map(a => {
    return { author: a, blogs: authors.filter(n => n === a).length }
  })
  return authorsAndPosts.find(b => b.blogs === Math.max(...authorsAndPosts.map(a => a.blogs)))
}

const mostLikes = (blogs) => {
  const authors = blogs.map(e => e.author)
  const uniqueAuthors = authors.filter((val, i) => authors.indexOf(val) === i)

  const findWinner = () => {
    const authorBlogs = []
    uniqueAuthors.forEach(aut => {
      let blog = blogs.filter(a => a.author === aut)
      authorBlogs.push(blog)
    })
    const authorsAndLikes = authorBlogs.map((a, i) => { return { author: a[i].author, likes: totalLikes(a) } })
    const winner = authorsAndLikes.find(a => a.likes === Math.max(...authorsAndLikes.map(a => a.likes)))
    return winner
  }
  return findWinner()
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
