import React, { useState } from 'react';
import PhilosopherCard from './PhilosopherCard';

function PhilosopherList({ philosophers }) {
  const [selectedPhilosopher, setSelectedPhilosopher] = useState(null);

  const handleCardClick = (philosopher) => {
    setSelectedPhilosopher(philosopher);
  };

  const handleModalClose = () => {
    setSelectedPhilosopher(null);
  };

  return (
    <div className="philosopher-list">
      {philosophers.map((philosopher) => (
        <PhilosopherCard
          key={philosopher.id}
          philosopher={philosopher}
          onCardClick={handleCardClick}
        />
      ))}
      {selectedPhilosopher && (
        <div className="modal">
          <div className="modal-content">
            <span className="modal-close" onClick={handleModalClose}>
              &times;
            </span>
            <h2>{selectedPhilosopher.name}</h2>
            <p>{selectedPhilosopher.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhilosopherList;
