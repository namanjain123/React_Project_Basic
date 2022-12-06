import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div class="cat-header">
      <header className="App-header">
        <div>
      <h1 class="challenge-name" id="title">30 Days Of React</h1>
      <div><a class="nav-link" href="/day-20/cats">Day 20 &gt;&gt;</a></div>
      <ul id="menu"><li><a href="/">HOME</a></li><li><a href="/about">About</a></li><li><a href="/dummy-data-generator">Dummy Data</a></li></ul>
      </div>
      <div class="title"><h1 class="cats-header-title">Cats Paradise</h1><p>There are 0 cat breeds </p><small class="cat-summary">On average a cat can weight about <strong class="average">NaN</strong> Kg and lives <strong class="average">NaN</strong> years.</small></div>
      </header></div>
    </div>
  );
}

export default App;
