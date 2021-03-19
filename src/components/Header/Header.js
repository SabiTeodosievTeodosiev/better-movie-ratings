import { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header className='header'>
                    <section className='logo'>Better Movie Ratings</section>
                    <ul className='header-nav'>
                        <li className='header-nav-item'>Home</li>
                        <li className='header-nav-item'>Movies</li>
                        <li className='header-nav-item'>Favourites</li>
                        <li className='header-nav-item'>About</li>
                    </ul>
                </header>
            </div>
        );
    }
}

export default Header;