import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#22264c", height: "100vh" }}>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
