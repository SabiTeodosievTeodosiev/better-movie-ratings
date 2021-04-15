import './MovieSearchForm.css';
import movieService from '../../../services/movieService';
import { useState, useEffect } from 'react';

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

                    <div className="fieldset-row fieldset-row-stars">
                        <label htmlFor="release-date">Rate plot</label>
                        <div className="rate">
                            <input type="radio" id="star10" name="rate" value="10" />
                            <label for="star10" title="text">10 stars</label>
                            <input type="radio" id="star9" name="rate" value="9" />
                            <label for="star9" title="text">9 stars</label>
                            <input type="radio" id="star8" name="rate" value="8" />
                            <label for="star8" title="text">8 stars</label>
                            <input type="radio" id="star7" name="rate" value="7" />
                            <label for="star7" title="text">7 stars</label>
                            <input type="radio" id="star6" name="rate" value="6" />
                            <label for="star6" title="text">6 stars</label>
                            <input type="radio" id="star5" name="rate" value="5" />
                            <label for="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" value="4" />
                            <label for="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" value="3" />
                            <label for="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" value="2" />
                            <label for="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" value="1" />
                            <label for="star1" title="text">1 stars</label>
                        </div>
                    </div>

                    <div className="fieldset-row">
                        <input type="submit" value="Add to my movies" />
                    </div>
                </fieldset>
            </form>
        </div >
    );
}

export default MovieSearchForm;