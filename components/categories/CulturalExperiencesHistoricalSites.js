// CulturalExperiencesHistoricalSites.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { useActivities } from '../ActivitiesContext';
import ActivityCard from './ActivityCard';

const CulturalExperiencesHistoricalSites = () => {
  const { categoryName } = useParams();
  const { activities } = useActivities();

  const filteredActivities = activities.filter(
    (activity) => activity.category === 'Cultural Experiences & Historical Sites'
  );

  return (
    <div>
      <h2>Cultural Experiences & Historical Sites</h2>
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