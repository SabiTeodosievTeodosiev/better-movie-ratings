import "./FooterNav.css";
import { Link, NavLink } from 'react-router-dom';

function FooterNav(props) {
    return (
        <div className="footer-nav">
            <h3>Better Movie Ratings</h3>
            <ul>
                <li><NavLink activeStyle={{ color: 'gold' }} to="/contacts">Contacts</NavLink></li>
                <li><NavLink activeStyle={{ color: 'gold' }} to="/about">About</NavLink></li>
            </ul>
        </div>
    );
}

export default FooterNav;