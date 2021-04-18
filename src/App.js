import About from './components/About/About';
import All from './components/All/All';
import Contacts from './components/Contacts/Contacts';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Form from './components/Form/Form';
import Home from './components/Home/Home';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { auth } from './utils/firebase';
import './App.css';

function App(props) {
    // console.log('Process started' + process.env.PORT);

    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(setUser)
    }, []);

    return (
        <div className="site-wrapper">
            <Header />
            <main className='main'>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/all" exact component={All} />
                    <Route path="/all/:userId" component={All} />
                    <Route path="/login" exact render={(props) => < Form {...props} type="login" />} />
                    <Route path="/register" exact render={(props) => < Form {...props} type="register" />} />
                    <Route path="/search" exact render={(props) => < Form {...props} type="search" />} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/about" component={About} />
                    <Route path="/logout" exact render={props => {
                        auth.signOut();
                        // props.history.push('/');
                        return <Redirect to='/' />;
                    }} />
                    <Route component={ErrorPage} />
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

export default App;