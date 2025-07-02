import React from "react";

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: "#fff",
    margin: 0,
    padding: 0,
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    background: "#3f51b5",
    color: "#fff",
    padding: "20px 0 0 0",
  },
  arrow: {
    width: 0,
    height: 0,
    borderTop: "6px solid transparent",
    borderBottom: "6px solid transparent",
    borderRight: "12px solid #f7d48b",
    margin: "0 16px",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    margin: 0,
  },
  subHeader: {
    background: "#f7d48b",
    color: "#333",
    padding: "16px",
    fontSize: "1.1rem",
  },
  alumniSection: {
    display: "flex",
    width: "100%",
    background: "#3f51b5",
    minHeight: "250px",
  },
  alumniImage: {
    width: "60%",
    objectFit: "cover",
    height: "250px",
  },
  alumniText: {
    width: "40%",
    color: "#fff",
    padding: "32px",
    fontSize: "0.95rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
  },
  connectSectionHeader: {
    display: "flex",
    alignItems: "center",
    background: "#3f51b5",
    color: "#fff",
    padding: "20px 0 0 0",
    marginTop: "32px",
  },
  connectFormSection: {
    background: "#3f51b5",
    padding: "32px 0",
    color: "#fff",
  },
  form: {
    maxWidth: "600px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  },
  formFull: {
    gridColumn: "1 / span 2",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "2px",
    marginBottom: "8px",
  },
  textarea: {
    padding: "10px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "2px",
    minHeight: "60px",
    marginBottom: "8px",
  },
  submitBtn: {
    background: "#f7d48b",
    color: "#333",
    border: "none",
    padding: "12px",
    fontWeight: "bold",
    fontSize: "1rem",
    borderRadius: "2px",
    cursor: "pointer",
    gridColumn: "1 / span 2",
    marginTop: "8px",
  },
  label: {
    fontSize: "0.95rem",
    marginBottom: "4px",
    display: "block",
  },
};

export default function Alumni() {
  return (
    <div style={styles.page}>
      {/* Alumni Header */}
      <div style={styles.sectionHeader}>
        <div style={styles.arrow}></div>
        <h2 style={styles.title}>Alumni</h2>
      </div>
      <div style={styles.subHeader}>Our Alumni Network</div>
      {/* Alumni Section */}
      <div style={styles.alumniSection}>
        <img
          src=""
          alt="Alumni"
          style={styles.alumniImage}
        />
        <div style={styles.alumniText}>
          <p>
            I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
          </p>
        </div>
      </div>
      {/* Connect With Us Header */}
      <div style={styles.connectSectionHeader}>
        <div style={styles.arrow}></div>
        <h2 style={styles.title}>Connect With Us</h2>
      </div>
      {/* Connect Form */}
      <div style={styles.connectFormSection}>
        <form style={styles.form}>
          <div>
            <label style={styles.label}>First name*</label>
            <input type="text" style={styles.input} required />
          </div>
          <div>
            <label style={styles.label}>Last name*</label>
            <input type="text" style={styles.input} required />
          </div>
          <div>
            <label style={styles.label}>Email*</label>
            <input type="email" style={styles.input} required />
          </div>
          <div>
            <label style={styles.label}>Graduation year*</label>
            <input type="text" style={styles.input} required />
          </div>
          <div style={styles.formFull}>
            <label style={styles.label}>Message</label>
            <textarea style={styles.textarea} />
          </div>
          <button type="submit" style={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}