import repositoryData from './repositoryData';

// Function to make a GET request and fetch repository informatio
async function fetchRepositories() {
    console.log('Fetching repository data');

    // Fake a GET request
    var repos = await new Promise((resolve) => setTimeout(() => {
        return resolve(repositoryData);
    }, 1000));
    console.log('Finished fetching repository data.');
    return repos;
}

// What a Fetch call would/could look like
// const url = "https://blubracket.io/api/repos"
// fetch(url).then((data) => {
//     return data.json();
// }).then(res => { console.log(res) })

export default fetchRepositories;