import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Job Finder</h1>

        </header>
    )
}

const headerStyle = {
    textAlign: 'center',
    background: 'rgb(50,50,50)',
    color: 'white',
    borderBottom: "1px solid royalblue",
    borderTop: "1px solid rgb(50,50,50)",

}

export default Header
