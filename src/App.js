import './App.css';
import Bibliotheque from './Components/Bibliotheque';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Roy Lunetier
                </p>
                <nav>
                    <a href="">
                        Accueil
                    </a>
                    <a href="">
                        Lunettes de vue
                    </a>
                    <a href="">
                        Lunettes de soleil
                    </a>
                </nav>
            </header>
            <Bibliotheque />
        </div>
    );
}

export default App;
