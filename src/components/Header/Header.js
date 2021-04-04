import { Component } from 'react';
import './Header.css';
import Logo from "../Logo/Logo";
import HeaderNav from "../HeaderNav/HeaderNav";

//I prefer functional components but I am leaving a few class components in order to prove that I have learnt them
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