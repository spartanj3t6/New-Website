// WaterActivities.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { useActivities } from '../ActivitiesContext';
import ActivityCard from './ActivityCard';

const WaterActivities = () => {
  const { categoryName } = useParams();
  const { activities } = useActivities();

  const filteredActivities = activities.filter(
    (activity) => activity.category === 'Water Activities'
  );

  return (
    <div>
      <h2>Water Activities</h2>
      <div className="activity-list">
        {filteredActivities.map((activity, index) => (
          <ActivityCard
            key={index}
            title={activity.name}
            image={activity.image}
            description={activity.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WaterActivities;
