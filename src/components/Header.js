// src/components/Header.js
'use client';

import React, { useState } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header className={styles.header}>
            <h1>Facebook Poster</h1>
            <div className={styles.icons}>
                <i className="fas fa-search" title="Search"></i>
                <i className="fas fa-user" title="Profile"></i>
                <i className="fas fa-bars" title="Menu" onClick={toggleDropdown}></i>
            </div>
            {dropdownOpen && (
                <div className={styles.dropdown}>
                    <a href="/my-account" className={styles.dropdownItem}>My Account</a>
                    <a href="/settings" className={styles.dropdownItem}>Settings</a>
                    <a href="/parser" className={styles.dropdownItem}>Parser</a>
                    <a href="/poster" className={styles.dropdownItem}>Poster</a>
                    <a href="/add-groups" className={styles.dropdownItem}>Add Groups</a>
                </div>
            )}
        </header>
    );
};

export default Header;
