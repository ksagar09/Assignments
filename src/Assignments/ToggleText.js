import React, { useState } from "react";


const ToggleText = () => {
  const [showText, setShowText] = useState(false);
  return (
    <>
      {showText && <h1>Greetings Message</h1>}
      <button className='btnToggle' onClick={() => setShowText(!showText)}>Click me to Show/Hide Message</button>
    </>
  );
};

export default ToggleText;