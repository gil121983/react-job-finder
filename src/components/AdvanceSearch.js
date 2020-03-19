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
                        <select style={serachLine}>
                            <option value='default'>Results per page</option>
                            <option>25</option>
                            <option>50</option>
                            <option>75</option>
                            <option>100</option>
                        </select>


                        <div>
                            <span style={checkboxStyle}>
                                <input type="checkbox" name='type' value='full' id='full' />
                                <label htmlFor="full" >Ful Time</label>
                            </span>
                            <span style={checkboxStyle}>
                                <input type="checkbox" name='type' value='part' id='part' />
                                <label htmlFor="part" >Part Time</label>
                            </span >
                        </div>

                        <input type="text" placeholder="Minimum Salary" style={serachLine} />
                        <input type="text" placeholder="Minimum Salary" style={serachLine} />
                        <div style={checkboxStyle}>
                            <input type="checkbox" name='type' value='salary' id='salary' />
                            <label htmlFor="salary" >Show ads with unknown salary</label>
                        </div >

                        <input type="text" placeholder="Category" style={serachLine} />
                        <input type="text" placeholder="Company" style={serachLine} />
                        <div>
                            <span style={checkboxStyle}>
                                <input type="checkbox" name='type' value='contract' id='contract' />
                                <label htmlFor="contract" >Contract</label>
                            </span >
                            <span style={checkboxStyle}>
                                <input type="checkbox" name='type' value='permanent' id='permanent' />
                                <label htmlFor="permanent" >Permanent</label>
                            </span >
                        </div>
                        <input type="text" onChange={this.props.handleLocationChange} placeholder="Location" style={serachLine} />
                        <div style={rangeStyle} >
                            Distance: <input type="range" min='0' max='50' style={{ marginLeft: '10px', width: '190px' }} />
                        </div>
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