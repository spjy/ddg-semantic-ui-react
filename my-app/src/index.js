import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';

class DuckDuckGo extends React.Component {
  render() {
    return (
      <Container textAlign="center">
        <h1>DuckDuckGo!</h1>
      </Container>
    );
  }
}

ReactDOM.render(<DuckDuckGo />, document.getElementById('root'));
