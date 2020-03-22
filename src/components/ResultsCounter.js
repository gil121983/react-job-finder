import React, { Component } from 'react'

export default class ResultsCounter extends Component {
    render() {
        return (
            <div>
                <p style={{ marginLeft: '20px' }}>{this.props.resultsCount} </p>
            </div>
        )
    }
}
