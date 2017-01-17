const initialState = []

const topics = (state = initialState, action) => {
  const { type, data } = action
  switch (type) {
    case 'GET_TOPICS':
     return data
    default:
      return state
  }
}

export default topics
