import "./FooterInfo.css";

function FooterInfo(props) {
    return (
        <div className="footer-info">
            <h3>Better Movie Ratings</h3>
            <ul className="footer-info-ul">
                <li className="footer-info-li">About</li>
                <li className="footer-info-li">Common Questions</li>
                <li className="footer-info-li">Conditions</li>
            </ul>
        </div>
    );
}

export default FooterInfo;