import React, { useState, useEffect } from 'react';

function EndSession() {
  const [ended, setEnded] = useState(false);

  const handleEndButton = () => {
    setEnded(!ended)
  }

  return (
    <>
      <button style={{marginTop: "40px"}} onClick={handleEndButton}>{ended ? "Resume" : "End Session"}</button>
      {ended && 
      <>
        <p>You've ended your session!</p>
        <p>How did you do?</p>
      </>}
    </>
  );
}

export default EndSession;