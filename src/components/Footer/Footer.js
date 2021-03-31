import './Footer.css';
import FooterInfo from '../FooterInfo/FooterInfo';
import FooterNav from '../FooterNav/FooterNav';
import FooterMisc from '../FooterMisc/FooterMisc';


function Footer() {
    return (
        <footer className='footer'>
            <FooterInfo />
            <FooterNav />
            <FooterMisc />
            <section className='footer-nav-copyright'>Better Movie Ratings&copy; All rights reserved.</section>
            <ul className='footer-nav'>
                <li className='footer-nav-item'>Contact Us</li>
                <li className='footer-nav-item'>Help</li>
                <li className='footer-nav-item'>About Us</li>
            </ul>
        </footer>
    );
}

export default Footer;