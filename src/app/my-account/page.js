// /src/app/my-account/page.js
import React from 'react';
import '../../styles/globals.css';

const MyAccount = () => {
  return (
    <div className="account-container">
      <div className="account-header">
        <h1>My Account</h1>
        <p>Manage your personal information and settings</p>
      </div>
      <div className="profile-info">
        <h2>Profile Information</h2>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Joined:</strong> January 1, 2024</p>
      </div>
      <div className="account-content">
        <p>Welcome to your account page. Here you can manage your personal information, view your activity, and more.</p>
        <p>To get started, explore the sections below and make sure to update your profile as needed.</p>
      </div>
      <div className="account-buttons">
        <button>Update Profile</button>
        <button>View Activity</button>
        <button>Settings</button>
      </div>
    </div>
  );
};

export default MyAccount;
