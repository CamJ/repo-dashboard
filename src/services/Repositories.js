import repositoryData from './repositoryData';

async function fetchRepositories() {
    console.log('Fetching repository data');
    var repos = await new Promise((resolve) => setTimeout(() => {
        return resolve(repositoryData);
    }, 1000));
    console.log('Finished fetching repository data.');
    return repos;
}

export default fetchRepositories;