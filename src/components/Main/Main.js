import './Main.css';
import { Route, Switch } from 'react-router-dom';
import About from '../About/About';
import All from '../All/All';
import Home from '../Home/Home';
import Contacts from '../Contacts/Contacts';
import ErrorPage from '../ErrorPage/ErrorPage';
import MovieSearchForm from '../Form/MovieSearchForm/MovieSearchForm';
import LoginForm from '../Form/UserForm/LoginForm/LoginForm';
import RegisterForm from '../Form/UserForm/RegisterForm/RegisterForm';
import User from '../User/User';

function Main(props) {
    return (
        <main className='main'>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/all" exact component={All} />
                <Route path="/all/:userId" component={All} />
                <Route path="/search" component={MovieSearchForm} />
                <Route path="/user" exact component={User} />
                <Route path="/login" component={LoginForm} />
                <Route path="/register" component={RegisterForm} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/about" component={About} />
                <Route component={ErrorPage} />
            </Switch>
        </main>
    );
}

export default Main;