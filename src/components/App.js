import React, { Component } from 'react';
import { authorization} from '../../env.json';
import axios from 'axios'
import infoContainer from '../containers/infoContainer'


class App extends Component {
  constructor() {
    super()
    this.state = {
      randomTopic: null,
      diplayTopic: null
    }
  }

componentDidMount() {
  this.fetchTopics()
}

fetchPosts() {
  const { randomTopic } = this.state
  axios.get(`https://api.producthunt.com/v1/posts/all?search[topic]=${randomTopic}`,{
    headers: {
      "accept": "application/json",
      "content-type": "application/json",
      "authorization": `${authorization}`
    }
  })
  .then((response) => this.props.getPosts(response.data.posts))
  .catch(() => {
    console.log('nope');
  })
}

fetchTopics() {
  axios.get('https://api.producthunt.com/v1/topics',{
    headers: {
      "accept": "application/json",
      "content-type": "application/json",
      "authorization": `${authorization}`
    }
  })
  .then((response) => this.props.getTopics(response.data.topics))
  .then((allTopics) => {
    return Promise.all([allTopics, this.chooseTopic(allTopics)])
  })
  .then((chosenTopic) => {
    return Promise.all([chosenTopic, this.fetchPosts(chosenTopic)])
  })
  .catch(() => {
    console.log('nope');
  })
}

chooseTopic() {
  const { topics } = this.props
  let chosenTopic = topics[Math.floor(Math.random()*topics.length)];
  let fixedTopic = chosenTopic.name.toLowerCase().split(' ').join('-')
  this.setState({ randomTopic: fixedTopic, displayTopic: chosenTopic.name })
}


renderPosts() {
  return this.props.posts.map((post) => {
    return (
      <div className="post" key={post.id}>
        <h2>{post.name}</h2>
        <h3>{post.tagline}</h3>
      </div>
    )
  })
}

  render() {
    return (
      <div className="App">
        <h1>Socket Hunt</h1>
        {this.props.posts.length === 0 ? <h1>Loading...</h1> : this.renderPosts() }
      </div>
    );
  }
}

export default infoContainer(App)
