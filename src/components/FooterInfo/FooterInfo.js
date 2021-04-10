import { Component } from 'react';
import "./FooterInfo.css";

class FooterInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
}

export default FooterInfo;