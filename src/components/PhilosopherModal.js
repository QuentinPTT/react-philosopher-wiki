import React, { useRef, useEffect } from 'react';

function PhilosopherModal({ philosopher, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef, onClose]);

  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        <h2>{philosopher.name}</h2>
        <p dangerouslySetInnerHTML={{ __html: philosopher.bio.replace(/\n/g, '<br>') }}></p>
        <button className="modal-close" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
}

export default PhilosopherModal;