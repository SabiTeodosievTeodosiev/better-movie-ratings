const movieDbBaseUrl = 'http://www.omdbapi.com/';
const movieDbKey = '69636c87';

// http://www.omdbapi.com/?t=Jupiter+Ascending&y=2015&plot=full&apikey=69636c87
export const getMovieByTitleAndYear = (title, year, plotIsFull) => {
    const movieUrl = movieDbBaseUrl
        + "?t=" + escape(title)
        + (year === '' ? '' : ('&year=' + year))
        + (plotIsFull ? '&plot=full' : '')
        + '&apikey=' + movieDbKey;

    function trimProps(res) {
        return ({
            "Title": res.Title, "Released": res.Released, "Runtime": res.Runtime, "Genre": res.Genre, "Director": res.Director, "Actors": res.Actors
        });
    }

    return fetch(movieUrl)
        .then(res => res.json())
        .then((res) => trimProps(res))
        .catch((err) => console.log(err));
}

// const example = {
//     "Title": "Jupiter Ascending",
//     "Year": "2015",
//     "Rated": "PG-13",
//     "Released": "06 Feb 2015",
//     "Runtime": "127 min",
//     "Genre": "Action, Adventure, Sci-Fi",
//     "Director": "Lana Wachowski, Lilly Wachowski",
//     "Writer": "Lilly Wachowski, Lana Wachowski",
//     "Actors": "Mila Kunis, Channing Tatum, Sean Bean, Eddie Redmayne",
//     "Plot": "Jupiter Jones was born under a night sky, with signs predicting that she was destined for great things. Now grown, Jupiter dreams of the stars but wakes up to the cold reality of a job cleaning other people's houses and an endless run of bad breaks. Only when Caine Wise, a genetically engineered ex-military hunter, arrives on Earth to track her down does Jupiter begin to glimpse the fate that has been waiting for her all along - her genetic signature marks her as next in line for an extraordinary inheritance that could alter the balance of the cosmos.",
//     "Language": "English, Russian",
//     "Country": "USA, Australia",
//     "Awards": "4 wins & 16 nominations.",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMTQyNzk2MjA2NF5BMl5BanBnXkFtZTgwMjEwNzk3MjE@._V1_SX300.jpg",
//     "Ratings": [
//         {
//             "Source": "Internet Movie Database",
//             "Value": "5.3/10"
//         },
//         {
//             "Source": "Rotten Tomatoes",
//             "Value": "27%"
//         },
//         {
//             "Source": "Metacritic",
//             "Value": "40/100"
//         }
//     ],
//     "Metascore": "40", "imdbRating": "5.3",
//     "imdbVotes": "180,116",
//     "imdbID": "tt1617661",
//     "Type": "movie",
//     "DVD": "28 Jun 2016",
//     "BoxOffice": "$47,387,723",
//     "Production": "Anarchos Productions Inc.",
//     "Website": "N/A",
//     "Response": "True"
// };

const functionList = {
    getMovieByTitleAndYear
}

export default functionList;