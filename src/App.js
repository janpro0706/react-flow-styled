import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import Home from './Home';

type Props = {
};

const StyledApp = styled.div`
  
`;

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <Home val="flow-styled-react" />
      </div>
    );
  }
}

export default App;
