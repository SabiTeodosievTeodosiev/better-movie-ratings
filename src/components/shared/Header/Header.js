import { Component } from 'react';
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNav from "./HeaderNav/HeaderNav";
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className='header'>
                <HeaderLogo />
                <HeaderNav />
            </header>
        );
    }
}

export default Header;