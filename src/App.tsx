import React from 'react';
import logo from './logo.svg';
import VanillaCSS from './css-demos/css';
import CSSModules from './css-demos/css-modules';
import VanillaSCSS from './css-demos/scss';
import SCSSModules from './css-demos/scss-modules';
import StyledComponents from './css-demos/styled-components';
import './App.css';

function App() {
  return (
    <div className="App">
      <VanillaCSS />
      <CSSModules />
      <VanillaSCSS />
      <SCSSModules />
      <StyledComponents />
    </div>
  );
}

export default App;
