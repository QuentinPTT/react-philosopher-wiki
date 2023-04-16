import React, { useState } from 'react';
import PhilosopherModal from './PhilosopherModal.js';

function PhilosopherCard({ philosopher }) {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="card" onClick={handleCardClick}>
        <img src={philosopher.image} alt={philosopher.name} />
        <div className="card-content">
          <h2>{philosopher.name}</h2>
          <p>{philosopher.description}</p>
        </div>
      </div>
      {showModal && (
        <PhilosopherModal philosopher={philosopher} onClose={handleModalClose} />
      )}
    </>
  );
}

export default PhilosopherCard;
