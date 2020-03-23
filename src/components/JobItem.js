import React, { Component } from 'react';
import Toggle from './Toggle'

function removeStrong(str) {
    return str
        .replace(/<\/strong>/g, "")
        .replace(/<strong>/g, "")
}
export class JobItem extends Component {
    render() {
        const { title, company, location, created, description, redirectUrl } = this.props;
        const adDate = created.slice(0, -4).replace('T', ` at: `)
        return (
            <div style={adContainer}>
                <div style={adTitle}>
                    <h3> {removeStrong(title)}</h3>
                    <p style={{ color: 'royalblue' }}>{company.display_name}</p>
                </div>
                <div style={locationStyle}><p>{location}</p></div>
                <div className='desc-container' style={descContainer}>
                    <Toggle description={removeStrong(description)} redirectUrl={redirectUrl} />
                </div>

                <p style={{ textAlign: 'center', fontSize: '12px' }}> Created on: {adDate} </p>
            </div>
        )
    }
}
const adTitle = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '3px',
    //border: '1px solid black',

}
const adContainer = {
    background: 'white',
    boxShadow: '0px 0px 10px rgba(50,50,50,0.2)',
    margin: '10px',
    borderRadius: '8px',
    transition: '0.9s ease',
    alignSelf: 'center',


}
const descContainer = {
    //border: '1px solid black',
    textAlign: 'center',
    transition: '0.9s ease',
}
const locationStyle = {
    textAlign: 'center',
}
export default JobItem
