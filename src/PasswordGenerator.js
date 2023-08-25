import React, { useState } from "react";
import './PasswordGenerator.css';

const PasswordGenerator = () => {
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeAlphabets, setIncludeAlphabets] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const generatePassword = () => {
    const numbers = "0123456789";
    const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%^&*()_-+=<>?";

    let validChars = "";

    if (includeNumbers) validChars += numbers;
    if (includeAlphabets) validChars += alphabets;
    if (includeSpecialChars) validChars += specialChars;

    let password = "";

    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars.charAt(randomIndex);
    }

    setGeneratedPassword(password);
  };

  return (
    <div>
      <h2>Password Generator</h2>
      <label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
        Include Numbers
      </label>
      <label>
        <input
          type="checkbox"
          checked={includeAlphabets}
          onChange={() => setIncludeAlphabets(!includeAlphabets)}
        />
        Include Alphabets
      </label>
      <label>
        <input
          type="checkbox"
          checked={includeSpecialChars}
          onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
        />
        Include Special Characters
      </label>
      <button onClick={generatePassword}>Generate Password</button>
      {generatedPassword && (
        <div>
          <h3>Generated Password</h3>
          <input type="text" value={generatedPassword} readOnly />
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
