import React from 'react';
import reactDOM from 'react-dom';
import App from './App';

const Index = () => <App />;

const render = () => {
  reactDOM.render(
    <div>
      <Index />
    </div>,
    document.getElementById('app')
  );
};

render();
