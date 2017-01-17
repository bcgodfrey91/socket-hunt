const types = {
  GET_TOPICS: 'GET_TOPICS',
  GET_POSTS: 'GET_POSTS',
}

export const getTopics = (data) => {
  return {
    type: types.GET_TOPICS,
    data: data
  }
}

export const getPosts = (data) => {
  return {
    type: types.GET_POSTS,
    data: data
  }
}
