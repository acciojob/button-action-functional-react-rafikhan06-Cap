import React, { useState } from 'react';

const App = () => {
  // Use the useState hook to manage the visibility of the paragraph
  const [isVisible, setIsVisible] = useState(false);

  // Event handler to update the state when the button is clicked
  const handleClick = () => {
    setIsVisible(true);
  };

  return (
    <div id="main">
      {/* Button with the specific ID 'click' */}
      <button id="click" onClick={handleClick}>
        Click Me
      </button>

      {/* Conditional rendering to display the paragraph only when isVisible is true */}
      {isVisible && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.
        </p>
      )}
    </div>
  );
};

export default App;