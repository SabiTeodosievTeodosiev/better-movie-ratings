import MovieCard from '../MovieCard/MovieCard';
import LoginForm from '../Form/UserForm/LoginForm/LoginForm';
import './Main.css';

function Main(props) {
    return (
        <main className='main'>
            <MovieCard />
            <LoginForm />
        </main>
    );
}

export default Main;