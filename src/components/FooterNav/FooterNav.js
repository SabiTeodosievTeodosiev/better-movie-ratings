import "./FooterNav.css";

function FooterNav(props) {
    return (
        <div className="footer-nav">
            <h3>Go To</h3>
            <ul className="footer-nav-ul">
                <li className='footer-nav-li'>Contact Us</li>
                <li className='footer-nav-li'>Help</li>
                <li className='footer-nav-li'>About Us</li>
            </ul>
        </div>
    );
}

export default FooterNav;