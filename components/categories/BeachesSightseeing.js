// BeachesSightseeing.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { useActivities } from '../ActivitiesContext';
import ActivityCard from './ActivityCard';

const BeachesSightseeing = () => {
  const { categoryName } = useParams();
  const { activities } = useActivities();

  const filteredActivities = activities.filter(
    (activity) => activity.category === 'Beaches & Sightseeing'
  );

  return (
    <div>
      <h2>Beaches & Sightseeing</h2>
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

export default BeachesSightseeing;
