import React from 'react';

const AlphabetFilter = ({ alphabetFilter, setAlphabetFilter }) => {
  // Generiere die Buchstaben des Alphabets
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)); // ['A', 'B', 'C', ..., 'Z']

  return (
    <div className="alphabet-buttons my-2">
  <button onClick={() => setAlphabetFilter('')} className="btn btn-outline-secondary me-2">All</button>
  {alphabet.map(letter => (
    <button
      key={letter}
      onClick={() => setAlphabetFilter(letter)}
      className={`btn ${alphabetFilter === letter ? 'btn-primary' : 'btn-outline-secondary'} me-2`}
    >
      {letter}
    </button>
  ))}
</div>
  );
};

export default AlphabetFilter;
