import './Main.css';
import LoginForm from '../Form/UserForm/LoginForm/LoginForm';
import MovieSearchForm from '../Form/MovieSearchForm/MovieSearchForm';

function Main(props) {
    return (
        <main className='main'>
            {/* <LoginForm /> */}
            <MovieSearchForm />
        </main>
    );
}

export default Main;