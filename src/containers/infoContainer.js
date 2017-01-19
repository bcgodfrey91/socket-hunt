import { connect } from 'react-redux'
import { getTopics, getPosts } from '../actions/index';

const topicsWithContent = (topics) => {
  const filteredTopics = topics.filter((topic) => topic.posts_count > 0)
  return filteredTopics
}

const mapStateToProps = (state) => {
  const { topics, posts } = state
  return {
    topics: topicsWithContent(topics),
    posts: posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTopics: (topics) => {
      dispatch(getTopics(topics))
    },
    getPosts: (posts) => {
      dispatch(getPosts(posts))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
