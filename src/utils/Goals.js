// utils/Goals.js
import React from "react";

const GoalItem = ({ title, description, isLeft }) => {
  const containerClass = isLeft ? "timeline-container left" : "timeline-container right";

  return (
    <div className={containerClass}>
      <div className="timeline-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Goals = ({ goalsData }) => {
  return (
    <div className="timeline-start">
      {goalsData.map((goal, index) => (
        <GoalItem
          key={index}
          title={goal.title}
          description={goal.description}
          isLeft={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default Goals;
