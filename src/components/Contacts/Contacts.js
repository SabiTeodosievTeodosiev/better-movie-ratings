import './Contacts.css';

function Contacts(props) {
    // function initMap() {
    //     const softuni = { lat: -25.344, lng: 131.036 };

    // }
    return (
        <div className="contacts">
            <div className="info">
                <h2>Contact Us</h2>
                <p>Address: <address>bul. Aleksandar Malinov 78, Sofia, Bulgaria</address></p>
                <p>Phone: <tel>+359 88 912 3456</tel></p>
                <p>Working hours: <time>08:30</time> - <time>21:00</time></p>
            </div>

            <div className="iframe-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93866.29679176878!2d23.298195974267273!3d42.67572583507138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85cb55668ae1%3A0x447f9dd693e57def!2sSoftUni!5e0!3m2!1sen!2sbg!4v1618501862985!5m2!1sen!2sbg"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    title="uniqueTitle">
                </iframe>;
            </div>
        </div>
    );
}

export default Contacts;