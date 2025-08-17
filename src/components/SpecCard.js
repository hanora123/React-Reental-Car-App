import React from 'react';

const SpecCard = ({ spec }) => {
  return (
    <article className="spec-card" title={spec.name}>
      <div className="icon-wrapper">
        {spec.iconType === 'image' ? (
          <img src={spec.icon} alt="" className="spec-icon" />
        ) : (
          <i className={spec.icon} aria-hidden="true"></i>
        )}
      </div>
      <div className="spec-info">
        <span className="spec-name">{spec.name}</span>
        <span className="spec-value">{spec.value}</span>
      </div>
    </article>
  );
};

export default SpecCard; 