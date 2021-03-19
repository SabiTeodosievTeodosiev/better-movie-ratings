import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.css';

function App() {
    return (
        <div className="site-wrapper">
            <Header>Passing down props</Header>
            <Main />
            <Footer />
        </div>
    );
}

export default App;