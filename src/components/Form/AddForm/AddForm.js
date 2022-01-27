import './AddForm.css';
import './FieldsetRowStars/FieldsetRowStars';
import { getMovieByTitleAndYear } from '../../../services/movieService';
import { useState } from 'react';
import FieldsetRowStars from './FieldsetRowStars/FieldsetRowStars';

function AddForm(props) {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState(1900);
    const [fetchedData, setFetchedData] = useState({});
    const [backgroundImage, setBackgroundImage] = useState(null);

    const searchMovie = function (title, year) {
        getMovieByTitleAndYear(title, year)
            .then((res) => {
                setFetchedData(res);
                setBackgroundImage(res.Poster);
            })
            .catch((err) => console.log(err));
    }

    const handleSubmit = (e) => {
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

    // style = "background-image: url(https://accounts.icharts.net/stage/icharts-images/chartbook-images/Chart1457601371484.png); background-repeat: no-repeat;width: 100%;height: 100%;"
    return (
        <form onSubmit={handleSubmit} className="form">
            <fieldset>
                <legend>Add Movie</legend>

                <div className="form-column-container">
                    <div className="form-column">
                        <div className="fieldset-row">
                            <label htmlFor="title">Title</label>
                            <input placeholder="The Hobbit"
                                type="text"
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                    searchMovie(title, year);
                                }
                                }
                                name="title"
                                id="movie-title-input"
                            />
                        </div>

                        <div className="fieldset-row">
                            <label htmlFor="year">Year</label>
                            <input placeholder="2021"
                                type="number"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                name="year"
                                id="movie-year-input"
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
                    </div>

                    <div className="form-column">
                        <FieldsetRowStars criteria="story" />
                        <FieldsetRowStars criteria="suspense" />
                        <FieldsetRowStars criteria="originality" />
                        <FieldsetRowStars criteria="acting" />
                        <FieldsetRowStars criteria="realism" />
                        <FieldsetRowStars criteria="setting" />
                        <FieldsetRowStars criteria="soundtrack" />
                        <FieldsetRowStars criteria="composition" />
                        <FieldsetRowStars criteria="visual effects" />
                    </div>
                </div>

                <div className="fieldset-row">
                    <input type="submit" value="Add movie" />
                </div>
            </fieldset>
        </form>
    );
}

export default AddForm;