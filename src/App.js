import React from 'react';

import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Articles from './pages/Articles';
// import { Logo, NavLink } from './Components/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Content>
        <Articles />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
