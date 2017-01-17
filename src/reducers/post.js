const posts = (state = [], action) => {
  const { type, data } = action
    switch (type) {
      case 'GET_POSTS':
        return [...state, ...data]
      default:
        return state
    }
}

export default posts
