import React, { Component } from 'react'

export default class Toggle extends Component {
    state = {
        on: false,
    }
    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }
    render() {
        const { description, redirectUrl } = this.props
        return (
            <div>
                {this.state.on && (
                    //here goes the element to be shown/hide
                    <div>
                        <div>
                            <p className='desc' style={descStyle}>{description}</p>
                        </div>
                        <div>
                            <a href={redirectUrl} style={linkStyle}>contact</a>
                        </div>
                    </div>
                )}
                <button onClick={this.toggle} style={btnStyle}>Show/Hide</button>
            </div>
        )
    }
}
const descStyle = {
    wordWrap: 'break-word'
}

const btnStyle = {
    border: 'none',
    color: 'royalblue'
}
const linkStyle = {
    color: 'royalblue',
    margin: '20px',
}