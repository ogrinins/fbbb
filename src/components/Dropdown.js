// src/components/Dropdown.js
import React, { useState } from 'react';
import styles from '../styles/Dropdown.module.css';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.dropdown}>
            <i className="fas fa-bars" onClick={toggleDropdown} title="Menu"></i>
            {isOpen && (
                <div className={styles.menu}>
                    <a href="/my-account">My Account</a>
                    <a href="/settings">Settings</a>
                    <a href="/parser">Parser</a>
                    <a href="/poster">Poster</a>
                    <a href="/add-groups">Add Groups</a>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
