import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './pages/header';
import Imagen from './pages/content';
import About from './pages/about';
import Footer from './pages/footer';

function App() {
  return (
    <div className="App">
     
     <Header/>
     <Imagen/>
     <About/>
     <Footer/>
    </div>
  );
}

export default App;
