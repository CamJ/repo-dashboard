import React from 'react';

import RepoInsightRow from './RepoInsightRow';
import RepoTable from './RepoTable';

import fetchRepositories from '../services/Repositories';

class RepoPortal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            repos: []
        };
    }

    componentDidMount() {
        fetchRepositories().then((value) => {
            this.setState({
                isLoaded: true,
                repos: value
            });
        });
    }

    render() {
        const { isLoaded, repos } = this.state;

        return <div>
            <h1>Cameron's Repo Dashboard</h1>
            <RepoInsightRow />
            <RepoTable />
        </div>;
    }
}

export default RepoPortal;