// CategoryActivities.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { useActivities } from '../ActivitiesContext';
import ActivityCard from './ActivityCard';
import { toTitleCase } from '../utils';

const CategoryActivities = () => {
  const { categoryName } = useParams();
  const { activities } = useActivities();

  // Filter activities based on categoryName
  const filteredActivities = activities.filter((activity) =>
  activity.category.toLowerCase() === categoryName.toLowerCase()
);

  return (
    <div>
      <h2>{toTitleCase(categoryName)}</h2>
      <div className="activity-list">
        {filteredActivities.map((activity, index) => (
          <ActivityCard
            key={index}
            title={activity.name} 
            description={activity.description}
            provider={activity.provider}
            website={activity.website}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryActivities;
