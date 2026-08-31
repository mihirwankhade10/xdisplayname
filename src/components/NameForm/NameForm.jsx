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
        <>
          <hr className={styles.divider} />
          <div className={styles.result} id="result-display">
            <p className={styles.resultLabel}>Full Name</p>
            <p className={styles.resultName}>
              {firstName} {lastName}
            </p>
            <div className={styles.resultBadge}>
              <svg viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Submitted successfully
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default NameForm;
