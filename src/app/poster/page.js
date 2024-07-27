"use client";

import styles from "../page.module.css";
import { useEffect, useState } from "react";

export default function Parser() {
  const [groups, setGroups] = useState([]);
  const [numberOfGroups, setNumberOfGroups] = useState(0);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [textToPost, setTextToPost] = useState("");
  const [imageToPost, setImageToPost] = useState(null);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showDropdowns, setShowDropdowns] = useState(false);
  const [thanksMessage, setThanksMessage] = useState(false);
  const [postMore, setPostMore] = useState(false);

  useEffect(() => {
    async function fetchGroups() {
      // Заміна 'your_bas_endpoint_for_groups' на фактичний endpoint для отримання груп
      const response = await fetch('your_bas_endpoint_for_groups');
      const data = await response.json();
      setGroups(data.map(group => group.group_name));
    }
    fetchGroups();
  }, []);

  const handleContinue = () => {
    if (isNaN(numberOfGroups) || numberOfGroups <= 0) {
      setError("Invalid number format, please input the number of groups to post.");
    } else {
      setError("");
      setShowDropdowns(true);
    }
  };

  const handleDropdownSelection = () => {
    const selected = Array.from(document.querySelectorAll("select")).map(select => select.value);
    if (selected.includes("none")) {
      alert("Please select all groups.");
      return;
    }
    setSelectedGroups(selected);
    setShowDropdowns(false);
    setShowForm(true);
  };

  const handlePost = async () => {
    if (!textToPost || !imageToPost) {
      setError("Please enter text and select a file.");
    } else {
      setError("");
      // Заміна 'your_bas_endpoint_for_sending_posts' на фактичний endpoint для відправки постів
      const response = await fetch('your_bas_endpoint_for_sending_posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ selectedGroups, textToPost, imageToPost })
      });

      if (response.ok) {
        setThanksMessage(true);
        setPostMore(true);
        setShowForm(false);
      }
    }
  };

  const renderDropdowns = () => {
    return (
      <div className={styles.dropdowns}>
        {Array.from({ length: numberOfGroups }).map((_, i) => (
          <select key={i}>
            <option value="none" disabled selected>Select group {i + 1}</option>
            {groups.map((group, idx) => (
              <option key={idx} value={group}>{group}</option>
            ))}
          </select>
        ))}
        <button className={styles.button} onClick={handleDropdownSelection}>Continue</button>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoBox} id="infoBox">
        Input the number of groups to post
      </div>
      <div className={`${styles.formContainer} fade-in`} id="groupNumberContainer">
        <input type="number" value={numberOfGroups} onChange={(e) => setNumberOfGroups(e.target.value)} placeholder="Number of groups" />
        <button className={styles.button} onClick={handleContinue}>Continue</button>
        {error && <p className={`${styles.errorMessage}`} id="errorMessage">{error}</p>}
      </div>
      {showDropdowns && renderDropdowns()}
      {showForm && (
        <div className={`${styles.formContainer} fade-in`} id="formContainer">
          <div className={styles.postContainer}>
            <img src="https://via.placeholder.com/50" alt="User Avatar" />
            <textarea value={textToPost} onChange={(e) => setTextToPost(e.target.value)} placeholder="What's on your mind?"></textarea>
            <div className={styles.postIcons}>
              <label htmlFor="fileField"><i className="fas fa-image"></i></label>
              <input type="file" id="fileField" className={styles.hidden} onChange={(e) => setImageToPost(e.target.files[0])} />
            </div>
            <button className={styles.button} onClick={handlePost}>Post</button>
            {error && <p className={`${styles.errorMessage}`} id="formErrorMessage">{error}</p>}
            {thanksMessage && <p id="thanksMessage">Thanks, we will let you know when your order is finished.</p>}
            {postMore && <button className={styles.button} onClick={() => window.location.reload()}>Post More</button>}
          </div>
        </div>
      )}
    </div>
  );
}
