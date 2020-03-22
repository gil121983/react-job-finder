import React, { Component } from 'react'
import JobItem from './JobItem'

export class JobList extends Component {

    render() {
        return (
            <div>
                {/* <p style={{ marginLeft: '20px' }}>{this.props.resultsCount} </p> */}
                {this.props.jobs.map(job => (
                    <JobItem
                        key={job.id}
                        title={job.title}
                        company={job.company}
                        salary_is_predicted={job.salary_is_predicted}
                        salary={job.salary}
                        location={job.location.display_name}
                        created={job.created}
                        description={job.description}
                        redirectUrl={job.redirect_url}
                    />
                ))}

            </div>
        )
    }
}

export default JobList

