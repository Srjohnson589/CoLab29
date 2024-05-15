import React from 'react';
import Goal from './components/Goal.tsx';
import EndSession from './components/EndSession.tsx';

function App() {
  return (
    <div>
      <h1>Co.Lab Team 6 deepFocus</h1>
      <Goal/>
      {/* Placeholder for timer */}
      <div style={{height: "80px", width: "50vw", border: "2px solid blue"}}>Timer</div>
      <EndSession/>
    </div>
  );
}

export default App;