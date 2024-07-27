// /src/pages/settings.js
"use client";

import React, { useState } from 'react';
import styles from '../../styles/Settings.module.css';

const Settings = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSave = () => {
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Тут ви можете додати функціональність для збереження налаштувань
    setError('');
    setSuccess('Settings saved successfully!');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Settings</h1>
      <div className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your new password"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="notifications">Enable Notifications:</label>
          <input
            type="checkbox"
            id="notifications"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
        </div>
        <button className={styles.button} onClick={handleSave}>Save Settings</button>
        {error && <p className={styles.errorMessage}>{error}</p>}
        {success && <p className={styles.successMessage}>{success}</p>}
      </div>
    </div>
  );
};

export default Settings;
