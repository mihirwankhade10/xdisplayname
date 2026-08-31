import React, { useState } from 'react';
import styles from './NameForm.module.css';

function NameForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() && lastName.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className={styles.card}>
      <form className={styles.form} onSubmit={handleSubmit} id="name-form">
        {/* First Name */}
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="first-name">
            First Name
          </label>
          <input
            id="first-name"
            className={styles.input}
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            required
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              if (submitted) setSubmitted(false);
            }}
            autoComplete="given-name"
          />
        </div>

        {/* Last Name */}
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="last-name">
            Last Name
          </label>
          <input
            id="last-name"
            className={styles.input}
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            required
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              if (submitted) setSubmitted(false);
            }}
            autoComplete="family-name"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={styles.submitBtn}
          id="submit-button"
        >
          Submit
        </button>
      </form>

      {/* Full Name Display */}
      {submitted && (
        <div className={styles.result} id="result-display">
          Full Name: {firstName} {lastName}
        </div>
      )}
    </div>
  );
}

export default NameForm;
