import './FieldsetRowStars.css';
// import { useState, useEffect } from 'react';

function FieldsetRowStars(props) {
    // [stars, setStars] = useState('1');

    return (
        <div className="fieldset-row fieldset-row-stars">
            <label htmlFor="release-date">{props.criteria}</label>
            <div className="rate">
                <input type="radio" id={props.criteria + "-star10"} name={props.criteria} value="10" />
                <label htmlFor={props.criteria + "-star10"} title="text">10 stars</label>
                <input type="radio" id={props.criteria + "-star9"} name={props.criteria} value="9" />
                <label htmlFor={props.criteria + "-star9"} title="text">9 stars</label>
                <input type="radio" id={props.criteria + "-star8"} name={props.criteria} value="8" />
                <label htmlFor={props.criteria + "-star8"} title="text">8 stars</label>
                <input type="radio" id={props.criteria + "-star7"} name={props.criteria} value="7" />
                <label htmlFor={props.criteria + "-star7"} title="text">7 stars</label>
                <input type="radio" id={props.criteria + "-star6"} name={props.criteria} value="6" />
                <label htmlFor={props.criteria + "-star6"} title="text">6 stars</label>
                <input type="radio" id={props.criteria + "-star5"} name={props.criteria} value="5" />
                <label htmlFor={props.criteria + "-star5"} title="text">5 stars</label>
                <input type="radio" id={props.criteria + "-star4"} name={props.criteria} value="4" />
                <label htmlFor={props.criteria + "-star4"} title="text">4 stars</label>
                <input type="radio" id={props.criteria + "-star3"} name={props.criteria} value="3" />
                <label htmlFor={props.criteria + "-star3"} title="text">3 stars</label>
                <input type="radio" id={props.criteria + "-star2"} name={props.criteria} value="2" />
                <label htmlFor={props.criteria + "-star2"} title="text">2 stars</label>
                <input type="radio" id={props.criteria + "-star1"} name={props.criteria} value="1" />
                <label htmlFor={props.criteria + "-star1"} title="text">1 stars</label>
            </div>
        </div>
    );
}

export default FieldsetRowStars;