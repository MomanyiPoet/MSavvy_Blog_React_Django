import Category from "./pages/Category";
import Landing from "./pages/Landing";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={ <Landing /> } />
          <Route path="/categories" element={ <Category /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
