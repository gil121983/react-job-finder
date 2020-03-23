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
      what: '',
      country: '',
      where: '',
      resultsCount: '',
      resultCountDisplay: '',
      resPerPage: 10,
      currentPage: 1,
      fromResult: 1,
      loading: false,
    };
  };

  handleWhatChange = (event) => { this.setState({ what: event.target.value }) }
  handleCountryChange = (event) => { this.setState({ country: event.target.value }) }
  handleLocationChange = (event) => { this.setState({ where: event.target.value }) }
  handleResultsPerPageChange = (event) => { this.setState({ resPerPage: event.target.value }) }
  handlePagination = (nextPage, nextFromResult) => {
    this.setState({
      fromResult: nextFromResult,
      currentPage: nextPage,
    }, this.mountURL)

  }

  search = () => { this.mountURL() }

  mountURL = () => {
    let what = this.state.what;
    let country = this.state.country;
    if (what && country) {
      let where = this.state.where;
      let resPerPage = this.state.resPerPage;
      let fromResult = this.state.fromResult;
      const YOUR_APP_ID = '4ba05dac';
      const YOUR_APP_KEY = '4c1878a7bab48cce0966ca79d9929993';
      const searchURL = `https://api.adzuna.com/v1/api/jobs/${country}/search/${fromResult}?app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&results_per_page=${resPerPage}&what=${what}&where=${where}&content-type=application/json`
      console.log('url mounted', searchURL);

      this.getServer(searchURL)
    }
  }

  getServer(searchURL) {
    this.setState({ loading: true })
    fetch(searchURL)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          jobs: data.results,
          resultsCount: data.count,
          resultsCountDisplay: `Found: ${data.count} job ads`,
          loading: false,
        })


      })
      .catch((err) => console.log('ERROR', err)
      )

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Searcher
          what={this.state.what}
          where={this.state.what}
          fromResult={this.state.fromResult}
          handleWhatChange={this.handleWhatChange}
          handleCountryChange={this.handleCountryChange}
          handleLocationChange={this.handleLocationChange}
          handleResultsPerPageChange={this.handleResultsPerPageChange}
          search={this.search}
        />

        <ResultsCounter resultsCountDisplay={this.state.resultsCountDisplay} />
        <JobList jobs={this.state.jobs} loading={this.state.loading} />
        <Pagination
          loading={this.state.loading}
          resultsCount={this.state.resultsCount}
          resPerPage={this.state.resPerPage}
          fromResult={this.state.fromResult}
          currentPage={this.state.currentPage}
          handlePagination={this.handlePagination}
        />

      </div>
    );
  }
}

export default App;
