import { BrowserRouter as Router } from 'react-router-dom';
import AppHeader from './modules/header/AppHeader';
import RoutingConfig from './modules/routing/RoutingConfig';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <AppHeader />
        <RoutingConfig />
      </Router>
    </div>
  );
}

export default App;
