import React, { useState, useEffect } from 'react';

function Goal() {
    const [goal, setGoal] = useState('');
    const [sessionGoal, setSessionGoal] = useState('');

    const handleSetGoal = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGoal(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setSessionGoal(goal);
      setGoal('');
    }

    const handleEdit = () => {
      setSessionGoal('');
      setGoal(sessionGoal);
    }

  return (
    <>
      {sessionGoal ? <>
        <p>{sessionGoal}</p>
        <button style={{margin: "0 0 20px 0"}} onClick={handleEdit}>Edit Goal</button>
      </>
      :<form>
        <label htmlFor="goal">Set a Session Goal</label><br></br>
        <input id="goal" name="goal" value={goal} onChange={handleSetGoal}></input><br></br>
        <button style={{margin: "0 0 20px 0"}} onClick={handleSubmit}>Submit</button>
      </form>
      }
    </>
  );
}

export default Goal;