
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <section>
<h1>Dictionary App</h1>
<h4>Please Search for Something...</h4>
</section>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
    
      This project was coded by Tara Ryan and is {" "}
          <a
            href="https://github.com/TahhRahh/dictionary-project/"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced.
          </a>{" "}
          </footer>
    </div>
    </div>
  );
}

export default App;
