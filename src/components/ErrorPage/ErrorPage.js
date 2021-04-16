import './ErrorPage.css';

function ErrorPage(props) {
    return (
        <div className="error-page">
            <section>
                <h1>404</h1>
                <p>Sorry,</p>
                <p>page does not exist,</p>
                <p>wrong url or invalid request</p>
            </section>
        </div>
    );
}

export default ErrorPage;