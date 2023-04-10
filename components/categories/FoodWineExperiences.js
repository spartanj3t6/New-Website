// FoodWineExperiences.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { useActivities } from '../ActivitiesContext';
import ActivityCard from './ActivityCard';

const FoodWineExperiences = () => {
  const { categoryName } = useParams();
  const { activities } = useActivities();

  const filteredActivities = activities.filter(
    (activity) => activity.category === 'Food & Wine Experiences'
  );

  return (
    <div>
      <h2>Food & Wine Experiences</h2>
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

export default FoodWineExperiences;
