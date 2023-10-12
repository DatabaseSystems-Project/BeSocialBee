import Login from "./components/Login"
import Home from "./components/Home"
import {Route, HashRouter, Routes} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
        <Routes>
          <Route exact path="/" element={<Login />}/>
          <Route exact path="/" element={<Home />}/>
          
        </Routes>
    </HashRouter>

    
  );
}

export default App;
