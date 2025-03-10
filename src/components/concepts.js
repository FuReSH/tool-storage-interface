import React, { useState, useEffect } from 'react';
import { useAllDataFile } from '../hooks/use-all-data-file';
import { GoFilter } from "react-icons/go";
import { Link } from 'gatsby';

const Concepts = ({ onConceptsChange }) => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const tadirahConcepts = useAllDataFile();
  const filename = tadirahConcepts.allFile.edges.find(edge => edge.node.extension === "txt").node.publicURL;

  useEffect(() => {
    fetch(filename)
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n');
        setOptions(lines.filter(line => line.trim() !== ''));
      })
      .catch(error => console.error('Error loading the data file:', error));
  }, [filename]);

  const handleSelectChange = (event) => {
    const values = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedOptions(values);
    onConceptsChange(values); // Callback-Funktion aufrufen
  };

  return (
    <div>
      <strong className="h5"><GoFilter /> Choose TaDiRAH concepts</strong>
      <hr />
      <p className="fs-6 my-2">Use the Ctrl key to select and deselect one or more concepts.</p>
      <p className="fs-6 my-3">Further information on the TaDiRAH concepts can be found on the <Link to="https://de.dariah.eu/tadirah">official taxonomy website</Link>.</p>
      <div className="input-group shadow-sm">
        <select 
          multiple
          size="20"
          className="form-select" 
          aria-label="Select TaDiRAH concept" 
          onChange={handleSelectChange}
          value={selectedOptions}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Concepts;
