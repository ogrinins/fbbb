'use client';

import { useState } from 'react';
import '../../styles/globals.css'; // Імпортуємо глобальні стилі

export default function AddGroups() {
  const [groups, setGroups] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleAddGroup = () => {
    if (inputValue.trim()) {
      setGroups([...groups, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleSubmit = () => {
    // Тут ви можете додати ваш код для обробки груп (зберігання, відправка на сервер і т.д.)
    setMessage('Thanks! We will let you know when your groups will be added.');
    setGroups([]);
  };

  return (
    <div className="account-container">
      <h1 className="account-header">Add Groups</h1>
      <div className="inputContainer">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddGroup()}
          placeholder="Enter group link..."
          className="input"
        />
        <button onClick={handleAddGroup} className="button">Add More</button>
      </div>
      <ul className="groupList">
        {groups.map((group, index) => (
          <li key={index} className="groupItem">{group}</li>
        ))}
      </ul>
      <button onClick={handleSubmit} className="button">Add These Groups</button>
      {message && <div className="message">{message}</div>}
    </div>
  );
}
