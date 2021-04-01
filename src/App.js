import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './utils/firebase';
import './App.css';

function App() {
    console.log('Process started' + process.env.PORT);

    return (
        <div className="site-wrapper">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;