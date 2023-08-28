import React from 'react';
import "../Style/Popup.css";

const Popup = ({ onAccept, onDecline }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>Disclaimer</h2>
        <p>
          The information provided on this website is for general informational purposes only and should not be considered as legal advice. Shoolin Consultancy does not engage in advertisement or solicitation of any kind. By accessing this website, www.shoolinconsultancy.in, you acknowledge that you are seeking information about Shoolin Consultancy voluntarily and not as a result of any solicitation or inducement.
        </p>
        <p>
          Shoolin Consultancy and its members shall not be liable for any consequences resulting from actions taken based on the information provided on this website. If you require legal advice, please consult with a qualified attorney.
        </p>
        <button onClick={onAccept} className='Popup-left' sty>Accept</button>
      </div>
    </div>
  );
};

export default Popup;
