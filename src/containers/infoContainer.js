import { connect } from 'react-redux'
import { getTopics, getPosts } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    topics: state.topics,
    posts: state.posts
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
