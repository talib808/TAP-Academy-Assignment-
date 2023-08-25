import React, { useState } from 'react';
import './GeneratedPassword.css';

const GeneratedPassword = ({ password }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  return (
    <div>
      <h3>Generated Password</h3>
      <input type="text" value={password} readOnly />
      <button onClick={copyToClipboard}>{copied ? 'Copied!' : 'Copy to Clipboard'}</button>
    </div>
  );
};

export default GeneratedPassword;
