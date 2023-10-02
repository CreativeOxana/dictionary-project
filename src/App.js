import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div claaName="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary deafultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>Coded by Oxana Chiziţcaia</small>
        </footer>
      </div>
    </div>
  );
}
