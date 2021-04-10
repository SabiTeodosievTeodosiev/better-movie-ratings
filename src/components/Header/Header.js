import { Component } from 'react';
import Logo from "../Logo/Logo";
import HeaderNav from "../HeaderNav/HeaderNav";
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className='header'>
                <Logo />
                <HeaderNav />
            </header>
        );
    }
}

export default Header;