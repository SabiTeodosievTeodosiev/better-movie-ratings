import './MovieSearchForm.css';
import './FieldsetRowStars/FieldsetRowStars'
import movieService from '../../../services/movieService';
import { useState, useEffect } from 'react';
import { Redirect, useHistory, withRouter } from 'react-router-dom';
import FieldsetRowStars from './FieldsetRowStars/FieldsetRowStars';

function MovieSearchForm(props) {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [fetchedData, setFetchedData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        movieService.getMovieByTitleAndYear(title, year)
            .then((res) => setFetchedData(res))
            .catch((err) => console.log(err));

        console.clear();
        console.log(fetchedData);
    }

    const handlePostMovie = (e) => {
        e.preventDefault();


        // ADD STAR RATINGS
        // const movieToAddToDb = { ...fetchedData };
        // <Redirect to=""
    }

    return (
        <div className="movie-search-form">
            <form onSubmit={handleSubmit} className="form movie-search-disabled-form">
                <fieldset>
                    <legend>Find Movie</legend>

                    <div className="fieldset-row">
                        <label htmlFor="title">Search by title</label>
                        <input placeholder="The Hobbit"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            name="title"
                            id="movie-title-input"
                        />
                    </div>

                    <div className="fieldset-row">
                        <label htmlFor="title">Search by year</label>
                        <input placeholder="2021"
                            type="text"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            name="title"
                            id="movie-title-input"
                        />
                    </div>

                    <div className="fieldset-row">
                        <input type="submit" value="Find movie" />
                    </div>
                </fieldset>
            </form>

            <form onSubmit={handlePostMovie} className="form movie-auto-fill-form">
                <fieldset>
                    <legend>Found Movie</legend>

                    <div className="fieldset-row">
                        <label htmlFor="title">Movie Title</label>
                        <input placeholder="The Hobbit"
                            type="text"
                            disabled
                            value={fetchedData.Title}
                            name="title"
                            id="movie-title-input"
                        />
                    </div>

                    <div className="fieldset-row">
                        <label htmlFor="release-date">Release Date</label>
                        <input placeholder="2021"
                            type="text"
                            disabled
                            value={fetchedData.Released}
                            name="release-date"
                            id="release-date"
                        />
                    </div>

                    <div className="fieldset-row">
                        <label htmlFor="runtime">Runtime</label>
                        <input placeholder="90min"
                            type="text"
                            disabled
                            value={fetchedData.Runtime}
                            name="runtime"
                            id="runtime"
                        />
                    </div>

                    <div className="fieldset-row">
                        <label htmlFor="genre">Genre</label>
                        <input placeholder="Action"
                            type="text"
                            disabled
                            value={fetchedData.Genre}
                            name="genre"
                            id="genre"
                        />
                    </div>

                    <div className="fieldset-row">
                        <label htmlFor="director">Director</label>
                        <input placeholder="Micael Bay"
                            type="text"
                            disabled
                            value={fetchedData.Director}
                            name="director"
                            id="director"
                        />
                    </div>

                    <div className="fieldset-row">
                        <label htmlFor="actors">Actors</label>
                        <input placeholder="Brad Pitt"
                            type="text"
                            disabled
                            value={fetchedData.Actors}
                            name="actors"
                            id="actors"
                        />
                    </div>

                    <FieldsetRowStars criteria="story" />
                    <FieldsetRowStars criteria="suspense" />
                    <FieldsetRowStars criteria="originality" />
                    <FieldsetRowStars criteria="acting" />
                    <FieldsetRowStars criteria="realism" />
                    <FieldsetRowStars criteria="setting" />
                    <FieldsetRowStars criteria="soundtrack" />
                    <FieldsetRowStars criteria="composition" />
                    <FieldsetRowStars criteria="special effects" />

                    <div className="fieldset-row">
                        <input type="submit" value="Add to my movies" />
                    </div>
                </fieldset>
            </form>
        </div >
    );
}

export default MovieSearchForm;