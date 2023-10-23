import React from 'react';

function GuessInput({ gameStatus, handleSubmitGuess }) {

  const [tempGuess, setTempGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(tempGuess);
    setTempGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== 'running'}
        minLength={5}
        maxLength={5}
        id="guess-input"
        type="text"
        value={tempGuess}
        pattern="[a-zA-Z]{5}" title="five characters"
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTempGuess(nextGuess);

        }}
      />
      < button > guess</button>
    </form >
  );
}

export default GuessInput;
