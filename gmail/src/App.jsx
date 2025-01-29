
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar"; 
import './components/navbar/navbar.scss';
import "./App.scss";

function App() {
  return (
      <div className="app">
      <Navbar/>
      <Sidebar/>
      </div>

  );
}

export default App;
