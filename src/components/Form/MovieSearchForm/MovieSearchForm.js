import './MovieSearchForm.css';
import './FieldsetRowStars/FieldsetRowStars';
import {getMovieByTitleAndYear} from '../../../services/movieService';
import { useState } from 'react';
import FieldsetRowStars from './FieldsetRowStars/FieldsetRowStars';

function MovieSearchForm(props) {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [fetchedData, setFetchedData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        getMovieByTitleAndYear(title, year)
            .then((res) => setFetchedData(res))
            .catch((err) => console.log(err));
    }

    const handlePostMovie = (e) => {
        e.preventDefault();

        const movieObjToPost = {
            ...fetchedData,
            storyRating: e.target.story.value,
            suspenseRating: e.target.suspense.value,
            originalityRating: e.target.originality.value,
            actingRating: e.target.acting.value,
            realismRating: e.target.realism.value,
            settingRating: e.target.setting.value,
            soundtrackRating: e.target.soundtrack.value,
            compositionRating: e.target.composition.value,
            cgiRating: e.target.cgi.value,
        };

        console.log(movieObjToPost);
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
                    <FieldsetRowStars criteria="cgi" />

                    <div className="fieldset-row">
                        <input type="submit" value="Add to my movies" />
                    </div>
                </fieldset>
            </form>
        </div >
    );
}

export default MovieSearchForm;