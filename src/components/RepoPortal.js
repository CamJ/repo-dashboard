import React from 'react';

import RepoInsightRow from './RepoInsightRow';
import RepoTable from './RepoTable';

import fetchRepositories from '../services/Repositories';

// Component that renders the overall portal and all sub-components
class RepoPortal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: []
        };
    }

    // On first mount, load in the repositories
    componentDidMount() {
        fetchRepositories().then((value) => {
            this.setState({
                isLoaded: true,
                repos: value
            });
        });
    }

    render() {
        const { repos } = this.state;

        return <div>
            <h1>Cameron's Repo Dashboard</h1>
            <RepoInsightRow repos={repos} />
            <RepoTable repos={repos} />
        </div>;
    }
}

export default RepoPortal;