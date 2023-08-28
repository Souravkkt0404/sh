// CalendlyComponent.js
import React, { useEffect } from 'react';

const CalendlyComponent = () => {
 

  return (
    <div>
      <button id="calendly-button">Open Calendly Widget</button>
      <div id="calendly-container" style={{ minWidth: '320px', height: '580px' }}></div>
    </div>
  );
};

export default CalendlyComponent;
