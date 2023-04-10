//ActivitiesPage.js

import React from 'react';
import { useActivities } from '../ActivitiesContext';
import ActivityCard from './ActivityCard';

function ActivitiesPage() {
  const { activities } = useActivities();
  return (
    <div className="activities-page">
      <h1>Activities</h1>
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          title={activity.name}
          description={activity.description}
          provider={activity.provider}
          website={activity.website}
        />
    ))}
    </div>
  );
}

export default ActivitiesPage;
