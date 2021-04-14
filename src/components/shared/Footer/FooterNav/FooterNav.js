import "./FooterNav.css";
import { Link } from 'react-router-dom';

function FooterNav(props) {
    return (
        <div className="footer-nav">
            <h3>Better Movie Ratings</h3>
            <ul>
                <li><Link to="/contacts">Contacts</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    );
}

export default FooterNav;