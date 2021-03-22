import React from 'react';

import RepoInsightRow from './RepoInsightRow';
import RepoTable from './RepoTable';

class RepoPortal extends React.Component {
    render() {
        return <div>
            <h1>Cameron's Repo Dashboard</h1>
            <RepoInsightRow />
            <RepoTable />
        </div>;
    }
}

export default RepoPortal;