import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Menu } from './routes/Menu';
import { Contact } from './routes/Content';
import { Order } from './routes/Order';
import { NotFound } from './routes/NotFound';
function App() {
  return (
    <Router>
      <Route index path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/menu" Component={Menu} />
      <Route path="/contact" Component={Contact} />
      <Route path="/order" Component={Order} />
      <Route Component={NotFound} />
    </Router>
  );
}

export default App;
