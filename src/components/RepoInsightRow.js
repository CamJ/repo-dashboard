import React from 'react';
import { Grid, GridList } from '@material-ui/core';

function calculateStats(repos) {
    var stats = {}

    var privateRepo = 0
    var publicRepo = 0

    var riskSum = 0
    var riskMax = 0;
    var riskMin = Infinity;


    var sizeSum = 0;
    var sizeMax = 0;
    var sizeMin = Infinity;


    var commitSum = 0;
    var commitMax = 0;
    var commitMin = Infinity;

    for (var i = 0; i < repos.length; i++) {
        var repo = repos[i]

        if (repo.type === "private") {
            privateRepo += 1;
        } else {
            publicRepo += 1;
        }


        if (repo.risk_score > riskMax) {
            riskMax = repo.risk_score;
        }

        if (repo.risk_score < riskMin) {
            riskMin = repo.risk_score;
        }

        riskSum += repo.risk_score;


        if (repo.size > sizeMax) {
            sizeMax = repo.size;
        }

        if (repo.size < sizeMin) {
            sizeMin = repo.size;
        }

        sizeSum += repo.size;


        if (repo.commit_count > commitMax) {
            commitMax = repo.commit_count;
        }

        if (repo.commit_count < commitMin) {
            commitMin = repo.commit_count;
        }

        commitSum += repo.commit_count;
    }

    stats.sizeAverage = convertToMb(sizeSum / repos.length);
    stats.maxSize = convertToMb(sizeMax);
    stats.minSize = convertToMb(sizeMin);

    stats.commitAverage = Math.floor(commitSum / repos.length);
    stats.maxCommit = commitMax;
    stats.minCommit = commitMin;


    stats.riskAverage = riskSum / repos.length;
    stats.maxRisk = riskMax;
    stats.minRisk = riskMin;

    stats.privateRepos = privateRepo;
    stats.publicRepos = publicRepo;

    return stats;
}

function convertToMb(kb) {
    return Math.floor(kb / 1024);
}

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