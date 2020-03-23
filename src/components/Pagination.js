import React, { Component } from 'react';

class Pagination extends Component {
    render() {
        const { resultsCount, resPerPage, fromResult, currentPage, handlePagination } = this.props;
        const indexOFFirstAd = parseInt(fromResult)
        const totalPages = Math.ceil(resultsCount / resPerPage)
        const indexOfLastAd = indexOFFirstAd + parseInt(resPerPage);


        console.log(totalPages, indexOFFirstAd, indexOfLastAd, currentPage, resPerPage);


        if (resultsCount) {
            if (this.props.loading) {
                return (
                    <div>
                        <h3>Loading...</h3>
                    </div>
                )
            } else {
                return (
                    <div style={{ display: 'flex', justifyContent: "center" }}>
                        <button
                            className="prev-btn"
                            style={btnStyle}
                            onClick={() => {
                                if (fromResult - resPerPage >= 1)
                                    handlePagination(currentPage - 1, fromResult - resPerPage)
                            }}
                        >PREVIEW</button>
                        <p>Page: {currentPage} of: {totalPages}</p>
                        <button
                            className="next-btn"
                            style={btnStyle}
                            onClick={() => {
                                handlePagination(currentPage + 1, fromResult + resPerPage)
                            }}
                        >NEXT</button>
                    </div>
                )
            }
        } else {
            return null
        }
    }
}
const btnStyle = {
    width: '135px',
    margin: '5px', background: 'royalblue',
    borderRadius: "3px",
    border: '1px solid royalblue',
    color: 'white',
    fontSize: '12px',
}

export default Pagination
