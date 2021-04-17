import './utils/firebase';
import './App.css';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Main from './components/Main/Main';

function App(props) {
    // console.log('Process started' + process.env.PORT);

    return (
        <div className="site-wrapper">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;