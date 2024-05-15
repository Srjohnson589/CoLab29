import React, { useState, useEffect } from 'react';

function EndSession() {
  const [ended, setEnded] = useState(false);

  const handleEndButton = () => {
    setEnded(true)
  }

  return (
    <>
      <button style={{marginTop: "40px"}} onClick={handleEndButton}>End Session</button>
      {ended && 
      <>
        <p>You've ended your session!</p>
      </>}
    </>
  );
}

export default EndSession;