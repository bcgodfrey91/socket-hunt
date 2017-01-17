import React, { Component } from 'react';
import { authorization} from '../../env.json';
import axios from 'axios'


class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      topics: [],
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
  .then((response) => {
    this.setState({ posts: response.data.posts })
  })
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
  .then((response) => {
    this.setState({ topics: response.data.topics })
  })
  .catch(() => {
    console.log('nope');
  })
}

chooseTopic() {
  const { topics } = this.state
  let chosenTopic = topics[Math.floor(Math.random()*topics.length)];
  let fixedTopic = chosenTopic.name.toLowerCase().split(' ').join('-')
  this.setState({ randomTopic: fixedTopic, displayTopic: chosenTopic.name })
}


renderPosts() {
  return this.state.posts.map((post) => {
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
        <button onClick={() => this.chooseTopic()}>Topic</button>
        <button onClick={() => this.fetchPosts()}>Post</button>
        {this.state.posts.length === 0 ? <h1>No Results Available for {this.state.displayTopic}</h1> : this.renderPosts() }
      </div>
    );
  }
}

export default App;
