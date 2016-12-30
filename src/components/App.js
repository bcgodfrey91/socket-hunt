import React, { Component } from 'react';
import '../App.css';
import { authorization} from '../../env.json';
import axios from 'axios'
let endPointURL = "https://api.producthunt.com/v1/";


class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
    }
  }

componentDidMount() {
  this.fetchPosts()
}

fetchPosts() {
  axios.get('https://api.producthunt.com/v1/posts/all?search[topic]=cats',{
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
        {this.renderPosts()}
      </div>
    );
  }
}

export default App;
