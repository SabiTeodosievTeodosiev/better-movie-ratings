import { Component } from 'react';
import FooterNav from './FooterNav/FooterNav';
import FooterMisc from './FooterMisc/FooterMisc';
import './Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className='footer'>
                <FooterNav />
                <FooterMisc />
            </footer>
        );
    }
}

export default Footer;