import React, { Component, } from 'react';
import AdvanceSearch from './AdvanceSearch';

class Searcher extends Component {

    constructor(props) {
        super(props)

        this.state = {
            what: '',
            country: '',
            resultsPerPage: '10',
            where: '',

        }
    }

    handleWhatChange = (event) => {
        this.setState({
            what: event.target.value
        })
    }
    handleCountryChange = (event) => {
        this.setState({
            country: event.target.value
        })
    }
    handleLocationChange = (event) => {
        this.setState({
            where: event.target.value
        })
    }
    handleResultsPerPageChange = (event) => {
        this.setState({
            resultsPerPage: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        let what = this.state.what;
        let country = this.state.country;
        if (what && country) {
            let where = this.state.where;
            let resultsPerPage = this.state.resultsPerPage;
            const YOUR_APP_ID = '4ba05dac';
            const YOUR_APP_KEY = '4c1878a7bab48cce0966ca79d9929993';
            const url = `https://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&results_per_page=${resultsPerPage}&what=${what}&where=${where}&content-type=application/json`
            console.log(url)
            this.props.getServer(url)
        }
    }



    render() {
        const { what, country } = this.state
        return (
            <div style={divStyle}>
                <form style={searchContainer} onSubmit={this.handleSubmit} >
                    <AdvanceSearch
                        handleLocationChange={this.handleLocationChange}
                        handleResultsPerPageChange={this.handleResultsPerPageChange}
                    />
                    <input type="text" value={what} onChange={this.handleWhatChange} placeholder="WHAT?" style={serachLine} />
                    <select value={country} onChange={this.handleCountryChange} style={selectStyle}>
                        <option value="0">YOUR COUNTRY</option>
                        <option value="at">Austria</option>
                        <option value="au">Australia</option>
                        <option value="br">Brazil</option>
                        <option value="ca">Canada</option>
                        <option value="de">Denemark</option>
                        <option value="fr">France</option>
                        <option value="gb">England</option>
                        <option value="in">India</option>
                        <option value="it">Italy</option>
                        <option value="nl">Netherland</option>
                        <option value="nz">New Zealand</option>
                        <option value="pl">Poland</option>
                        <option value="ru">Russia</option>
                        <option value="sg">Singapore</option>
                        <option value="us">USA</option>
                        <option value="za">South Africa</option>
                    </select>
                    <button type='submit' style={searchBtnStyle}>SEARCH</button>
                </form>
            </div>
        )
    }
}
const divStyle = {
    background: 'rgb(50,50,50)',
    border: '3px solid rgb(50,50,50)',
    display: 'flex',
    justifyContent: 'center',
}
const searchContainer = {
    border: '3px solid rgb(50,50,50)',
    textAlign: 'center',
    width: '300px',
}
const serachLine = {
    margin: '5px',
    borderRadius: "3px",
    border: 'none',
    width: '280px',
    fontSize: '12px',
}
const selectStyle = {
    margin: '5px',
    borderRadius: "3px",
    border: 'none',
    width: '135px',
    fontSize: '12px',
}
const searchBtnStyle = {
    width: '135px',
    margin: '5px', background: 'royalblue',
    borderRadius: "3px",
    border: '1px solid royalblue',
    color: 'white',
    fontSize: '12px',
}

export default Searcher
