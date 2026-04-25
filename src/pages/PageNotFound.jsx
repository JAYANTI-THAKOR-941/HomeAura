import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.title}>Oops! Page Not Found</h2>
      <p style={styles.text}>
        The page you're looking for doesn’t exist or has been moved.
      </p>

      <button style={styles.button} onClick={() => navigate('/')}>
        Go Back Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  code: {
    fontSize: '120px',
    margin: 0,
    fontWeight: 'bold',
  },
  title: {
    fontSize: '28px',
    margin: '10px 0',
  },
  text: {
    fontSize: '16px',
    marginBottom: '20px',
    maxWidth: '400px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#fff',
    color: '#764ba2',
    cursor: 'pointer',
    transition: '0.3s',
  },
};

export default PageNotFound;