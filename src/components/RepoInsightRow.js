import React from 'react';

class RepoInsightRow extends React.Component {
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
        return <h1>Repo Insights</h1>;
    }
}

export default RepoInsightRow;