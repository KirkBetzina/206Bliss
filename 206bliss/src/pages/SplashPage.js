import React, { useState, useEffect } from 'react';

const SplashPage = () => {
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if the user has visited the page before
    const visitedBefore = localStorage.getItem('visitedBefore');
    if (visitedBefore) {
      setHasVisited(true);
    } else {
      localStorage.setItem('visitedBefore', true);
    }
  }, []);

  if (!hasVisited) {
    return (
      // Display the splash page
      <div>
        <h1>Welcome to the Travel Agency!</h1>
        <p>Experience the world with us.</p>
      </div>
    );
  } else {
    // Redirect the user to the main page
    window.location.href = 'https://www.206bliss.com';
    return null;
  }
};

export default SplashPage;
