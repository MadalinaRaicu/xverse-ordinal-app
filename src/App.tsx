import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import OrdinalDetails from './pages/OrdinalDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/inscription/:address/:inscriptionId'
          element={<OrdinalDetails />}
        />
      </Routes>
    </Router>
  );
};

export default App;
