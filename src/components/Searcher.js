import React, { Component, } from 'react';
import AdvanceSearch from './AdvanceSearch';


class Searcher extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }
    handleSubmit = (event) => {
        event.preventDefault()

        this.props.search()
    }

    render() {
        return (
            <div style={divStyle}>
                <form style={searchContainer} onSubmit={this.handleSubmit} >
                    <AdvanceSearch
                        handleLocationChange={this.props.handleLocationChange}
                        handleResultsPerPageChange={this.props.handleResultsPerPageChange}
                    />
                    <input type="text" value={this.props.what} onChange={this.props.handleWhatChange} placeholder="WHAT?" style={serachLine} ref={this.inputRef} />
                    <select value={this.props.country} onChange={this.props.handleCountryChange} style={selectStyle}>
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

export default Searcher;
