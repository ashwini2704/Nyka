import logo from './logo.svg';
import './App.css';
import { Signup } from './Pages/Signup';
import Login from './Pages/Login';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Signup/>
      <Login />
    </div>
  );
}

export default App;
