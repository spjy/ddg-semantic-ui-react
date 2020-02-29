import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class DuckDuckGo extends React.Component {
  render() {
    return (
      <h1>DuckDuckGo!</h1>
    );
  }
}

ReactDOM.render(<DuckDuckGo />, document.getElementById('root'));
