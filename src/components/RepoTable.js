import React from 'react';

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
        const { repos } = this.state;
        return <div>Repo Table</div>;
    }
}

export default RepoTable;