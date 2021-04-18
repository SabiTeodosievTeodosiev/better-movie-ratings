import HeaderNav from "./HeaderNav/HeaderNav";
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <header className='header'>
                <Link to="/"><section className='header-logo'>Better Movie Ratings</section></Link>
                <HeaderNav />
            </header>
        );
    }
}

export default Header;