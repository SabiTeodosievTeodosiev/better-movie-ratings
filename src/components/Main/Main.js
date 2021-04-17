import './Main.css';
import { Route, Switch } from 'react-router-dom';
import About from '../About/About';
import All from '../All/All';
// import Home from '../Home/Home';
import Contacts from '../Contacts/Contacts';
import ErrorPage from '../ErrorPage/ErrorPage';
import Form from '../Form/Form';
import User from '../User/User';
import { auth } from '../../utils/firebase';

function Main(props) {
    return (
        <main className='main'>
            <Switch>
                <Route path="/" exact component={All} />
                <Route path="/all" exact component={All} />
                <Route path="/all/:userId" component={All} />
                <Route path="/user" exact component={User} />
                <Route path="/login" exact render={(props) => < Form {...props} type="login" />} />
                <Route path="/register" exact render={(props) => < Form {...props} type="register" />} />
                <Route path="/search" exact render={(props) => < Form type="search" />} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/about" component={About} />
                <Route path="/logout" exact render={props => {
                    auth.signOut();
                }} />
                <Route component={ErrorPage} />
            </Switch>
        </main>
    );
}

export default Main;