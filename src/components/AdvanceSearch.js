import React, { Component } from 'react'

export default class AdvanceSearch extends Component {
    state = {
        on: false,
    }
    toggle = (event) => {
        event.preventDefault()
        this.setState({
            on: !this.state.on
        })
    }
    render() {

        return (
            <div>
                <button onClick={this.toggle} style={advSearchBtn}>Advanced Search</button>
                {this.state.on && (
                    //here goes the element to be shown/hide
                    <div>
                        <select style={serachLine} onChange={this.props.handleResultsPerPageChange}>
                            <option value='default'>Results per page</option>
                            <option>25</option>
                            <option>50</option>
                            <option>75</option>
                            <option>100</option>
                        </select>
                        <input type="text" onChange={this.props.handleLocationChange} placeholder="Location" style={serachLine} />
                        <button onClick={this.toggle} style={advSearchBtn}>Close Advanced Search</button>
                    </div>
                )}

            </div>
        )
    }
}
const serachLine = {
    margin: '5px',
    borderRadius: "3px",
    border: 'none',
    width: '280px',
}
const advSearchBtn = {
    border: 'none',
    background: 'none',
    color: 'royalblue',
}
const checkboxStyle = {
    color: 'white',
    marginLeft: '12px',
    marginRight: '12px',
    fontSize: '12px',
}
const rangeStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    color: 'white',
}