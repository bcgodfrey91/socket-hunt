const posts = (state = [], action) => {
  const { type, data } = action
  switch (type) {
    case 'GET_POSTS':
     return data
    default:
      return state
  }
}

export default posts
