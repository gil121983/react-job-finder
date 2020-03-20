import React, { Component } from 'react'
import JobItem from './JobItem'

export class JobList extends Component {

    render() {
        console.log(this.props.jobs);
        return this.props.jobs.map(job => (
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
        ))
    }
}

export default JobList

