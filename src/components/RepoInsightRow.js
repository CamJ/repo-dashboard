import React from 'react';
import { Grid } from '@material-ui/core';

import calculateStats from '../utilities/stats';

// Component that renders all in-depth insights into the repositories that are loaded
class RepoInsightRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: props.repos.length > 0,
            repos: props.repos,
            stats: calculateStats(props.repos),
        };
    }

    componentDidUpdate(_, prevState, __) {
        if (prevState.repos.length === 0) {
            var stats = calculateStats(this.props.repos);
            this.setState({
                isLoaded: true,
                repos: this.props.repos,
                stats: stats,
            });
        }
    }

    render() {
        const { repos, stats } = this.state;

        return <div>
            <h1>Repo Insights</h1>
            <Grid container direction="row" justify="center" spacing={1}>
                <Grid item xs={2} justify="center" className="RepoInsight--container" spacing={1}>
                    <div>
                        <strong className="RepoInsight--header">Repos</strong>
                        <p>Total: {repos.length}</p>
                        <p>Public: {stats.publicRepos} </p>
                        <p>Private : {stats.privateRepos} </p>
                    </div>
                </Grid>
                <Grid item xs={2} justify="center" className="RepoInsight--container" spacing={1}>
                    <div>
                        <strong className="RepoInsight--header">Risk</strong>
                        <p>Average: {stats.riskAverage}</p>
                        <p>Max: {stats.maxRisk} </p>
                        <p>Min : {stats.minRisk} </p>
                    </div>
                </Grid>
                <Grid item xs={2} justify="center" className="RepoInsight--container" spacing={1}>
                    <div>
                        <strong className="RepoInsight--header">Size (Mb)</strong>
                        <p>Average: {stats.sizeAverage} Mb</p>
                        <p>Max: {stats.maxSize} Mb</p>
                        <p>Min : {stats.minSize} Mb</p>
                    </div>
                </Grid>
                <Grid item xs={2} justify="center" className="RepoInsight--container" spacing={1}>
                    <div>
                        <strong className="RepoInsight--header">Commits per Repo</strong>
                        <p>Average: {stats.commitAverage}</p>
                        <p>Max: {stats.maxCommit}</p>
                        <p>Min : {stats.minCommit}</p>
                    </div>
                </Grid>
            </Grid>
        </div>;
    }
}

export default RepoInsightRow;