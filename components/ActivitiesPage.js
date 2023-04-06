// src/components/ActivitiesPage.js

import React from 'react';
import activities from './Activities';
import ActivityCard from './ActivityCard';

function ActivitiesPage() {
  return (
    <div className="activities-page">
      <h1>Activities</h1>
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          name={activity.name}
          category={activity.category}
          description={activity.description}
        />
      ))}
    </div>
  );
}

export default ActivitiesPage;
