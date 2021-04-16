import { Component } from 'react';
import FooterNav from './FooterNav/FooterNav';
import FooterCopyright from './FooterCopyright/FooterCopyright';
import './Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className='footer'>
                <FooterNav />
                <FooterCopyright />
            </footer>
        );
    }
}

export default Footer;