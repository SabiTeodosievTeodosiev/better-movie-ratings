import "./HeaderLogo.css";
import { Link } from 'react-router-dom';

function HeaderLogo(props) {
    return (
        <Link to="/">
            <section className='header-logo'>Better Movie Ratings</section>
        </Link>
    );
}

export default HeaderLogo;