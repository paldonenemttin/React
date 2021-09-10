import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import { } from './comps/index';
import Header from './comps/Header';
import MainNav from './comps/MainNav';
import BBsMain from './comps/BBsMain';

function App(){
  return (
    <Router>
      <div className="App">
        <Header />
        <MainNav />
        <section className="main_section">
        <BBsMain/>
        </section>
        <footer/>
    </div>
    </Router>
  );
}

export default App;
