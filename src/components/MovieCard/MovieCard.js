import { useEffect } from "react";
import "./MovieCard.css";

function MovieCard(props) {
    useEffect(() => {
        console.log('asd');
    });
    
    return (
        <div className='movie-card'></div>
    );
}

export default MovieCard;