import React, { Component } from 'react';
import Header from './components/layout/Header';
import Searcher from './components/Searcher';
import JobList from './components/JobList';
import ResultsCounter from './components/ResultsCounter';
import Pagination from './components/Pagination';

class App extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
    };
    this.getServer = this.getServer.bind(this)
  };

  getServer(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          jobs: data.results,
          resultsCount: `Found ${data.count} ads`,
        })
        console.log(data);
      })

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Searcher getServer={this.getServer} />
        <ResultsCounter resultsCount={this.state.resultsCount} />
        <JobList jobs={this.state.jobs} />
        <Pagination
          resultsCount={this.state.resultsCount}
          resPerPage={this.state.resPerPage}
          currentPage={this.state.currentPage}
        />

      </div>
    );
  }
}

export default App;
