import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <Routes>
    <Route path="/" element={<Greeting />} />
  </Routes>
);

export default App;
