import logo from './logo.svg';
import './App.css';
import './new.scss'
function App() {
  return (
    <div className="App">
      <header id="countries" class="country-header">
        <h2 class="">World Countries Data</h2>
        <p class="subtitle">Currently, we have 250 countries</p>
      </header>
      <div class="controls">
        <input class="search-input" type="text" placeholder="Search countries by name, city and languages" value=""/>
          <div>
            <a href="#stat">
              <i class="fas fa-chart-bar">
                </i>
                </a>
                
          </div></div>
          
    </div>
  );
}

export default App;
