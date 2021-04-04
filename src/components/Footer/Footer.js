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
        </footer>
    );
}

export default Footer;