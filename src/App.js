import React, { Component } from 'react';
import Header from './components/layout/Header';
import Searcher from './components/Searcher';
import JobList from './components/JobList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      jobs: []
    };
    this.getServer = this.getServer.bind(this)
  };

  getServer(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ jobs: data.results })
      })

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Searcher getServer={this.getServer} />
        <JobList jobs={this.state.jobs} />

      </div>
    );
  }
}

export default App;
