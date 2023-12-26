import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import FixedNav from './components/FixedNav/FixedNav';
import MainNav from './components/FixedNav/MainNav';

function App() {
  return (
    <div className="App">
      <FixedNav />
      <MainNav />
      <Router>
        <PublicRoutes />
      </Router>
    </div>
  );
}

export default App;
