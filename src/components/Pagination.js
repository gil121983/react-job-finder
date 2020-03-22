import React, { Component } from 'react';
//import Searcher, { handleNextBtn } from './Searcher'
export class Pagination extends Component {
    render() {
        if (this.props.resultsCount) {
            return (
                <div>
                    <button
                        className="prev-btn"
                    // onClick={handleNextBtn}
                    >
                        PREVIEW
                </button>
                    <button className="next-btn">NEXT</button>
                </div>
            )
        } else {
            return null
        }
    }
}

export default Pagination
