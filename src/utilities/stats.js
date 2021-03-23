
// Helper function that calculates relevant stats related to repositories
// This could be MUCH better, but was a quick and dirty way to get basic information
function calculateStats(repos) {
    var stats = {}

    // Repo type
    var privateRepo = 0
    var publicRepo = 0

    // Repo risk
    var riskSum = 0
    var riskMax = 0;
    var riskMin = Infinity;

    // Repo size
    var sizeSum = 0;
    var sizeMax = 0;
    var sizeMin = Infinity;

    // Repo commits
    var commitSum = 0;
    var commitMax = 0;
    var commitMin = Infinity;

    for (var i = 0; i < repos.length; i++) {
        var repo = repos[i]

        // Calculate repo type
        if (repo.type === "private") {
            privateRepo += 1;
        } else {
            publicRepo += 1;
        }

        // Calculate repo risk
        if (repo.risk_score > riskMax) {
            riskMax = repo.risk_score;
        } else if (repo.risk_score < riskMin) {
            riskMin = repo.risk_score;
        }
        riskSum += repo.risk_score;

        // Calculate repo size
        if (repo.size > sizeMax) {
            sizeMax = repo.size;
        } else if (repo.size < sizeMin) {
            sizeMin = repo.size;
        }
        sizeSum += repo.size;

        // Calculate repo commits
        if (repo.commit_count > commitMax) {
            commitMax = repo.commit_count;
        } else if (repo.commit_count < commitMin) {
            commitMin = repo.commit_count;
        }
        commitSum += repo.commit_count;
    }

    // Size final calculation
    stats.sizeAverage = convertToMb(sizeSum / repos.length);
    stats.maxSize = convertToMb(sizeMax);
    stats.minSize = convertToMb(sizeMin);

    // Commits final calculation
    stats.commitAverage = Math.floor(commitSum / repos.length);
    stats.maxCommit = commitMax;
    stats.minCommit = commitMin;

    // Risk final calculation
    stats.riskAverage = riskSum / repos.length;
    stats.maxRisk = riskMax;
    stats.minRisk = riskMin;

    // Type final calculation
    stats.privateRepos = privateRepo;
    stats.publicRepos = publicRepo;

    return stats;
}

function convertToMb(kb) {
    return Math.floor(kb / 1024);
}


export default calculateStats;