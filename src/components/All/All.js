import "./All.css";
import { useEffect } from 'react';

function All(props) {
    const userId = props.match.params.userId == undefined ? '' : props.match.params.userId;

    useEffect(() => {
        console.clear();
        console.log(userId);
    }, []);


    return (
        <div className='all'>

        </div>
    );
}

export default All;