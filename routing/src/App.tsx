import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Menu } from './routes/Menu';
import { Contact } from './routes/Content';
import { Order } from './routes/Order';
import { NotFound } from './routes/NotFound';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/menu" Component={Menu} />
        <Route path="/contact" Component={Contact} />
        <Route path="/order" Component={Order} />
        <Route Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
