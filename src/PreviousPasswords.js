import React, { useState, useEffect } from 'react';
import './PreviousPasswords.css';

const PreviousPasswords = () => {
  const [previousPasswords, setPreviousPasswords] = useState([]);

  useEffect(() => {
    const storedPasswords = JSON.parse(localStorage.getItem('previousPasswords')) || [];
    setPreviousPasswords(storedPasswords);
  }, []);

  useEffect(() => {
    localStorage.setItem('previousPasswords', JSON.stringify(previousPasswords));
  }, [previousPasswords]);

  return (
    <div>
      <h3>Previous Passwords</h3>
      <ul>
        {previousPasswords.map((password, index) => (
          <li key={index}>{password}</li>
        ))}
      </ul>
    </div>
  );
};

export default PreviousPasswords;
