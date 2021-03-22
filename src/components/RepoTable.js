import React from 'react';

import { DataGrid } from '@material-ui/data-grid';
import Link from '@material-ui/core/Link';

function getSizeInMb(params) {
    return `${Math.floor(params.getValue('size') / 1024)}`;
}

function getDateFormat(params) {
    var date = new Date(parseInt(params.value));
    return date.toString();
}

const columns = [
    { field: 'id', hide: true },
    { field: 'name', headerName: 'Repo Name', flex: 2 },
    {
        field: 'url', headerName: 'Url', flex: 3, renderCell: (params) => (
            <Link href={params.value}>
                { params.value}
            </Link>),
    },
    {
        flex: 1,
        field: 'risk_score',
        headerName: 'Risk',
        type: 'number',
    },
    {
        flex: 1,
        field: 'type',
        headerName: 'Repo Type',
    },
    {
        flex: 1,
        field: 'clone_count',
        headerName: 'Clones',
        type: 'number',
    },
    {
        flex: 1,
        field: 'contribution_count',
        headerName: 'Contributors',
        type: 'number',
    },
    {
        flex: 1,
        field: 'commit_count',
        headerName: 'Commits',
        type: 'number',
    },
    {
        flex: 1,
        field: 'sizeInMb',
        headerName: 'Size (mb)',
        valueGetter: getSizeInMb
    },
    {
        field: 'last_activity',
        headerName: 'Last Activity',
        flex: 2,
        valueFormatter: getDateFormat,
    },
];

class RepoTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: props.repos.length > 0,
            repos: props.repos,
        };
    }

    componentDidUpdate(_, prevState, __) {
        if (prevState.repos.length === 0) {
            this.setState({
                isLoaded: true,
                repos: this.props.repos,
            })
        }
    }

    render() {
        const { isLoaded, repos } = this.state;
        return <div style={{ height: window.screen.availHeight * .45, width: '100%' }}>
            <h2>Repositories</h2>
            <DataGrid rows={repos} columns={columns} loading={!isLoaded} density="compact" />
        </div>;
    }
}

export default RepoTable;