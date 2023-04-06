// src/components/ActivitiesPage.js

import React from 'react';
import activities from './Activities';
import Activity from './Activity';

function ActivitiesPage() {
  return (
    <div className="activities-page">
      <h1>Activities</h1>
      {activities.map((activity) => (
        <Activity
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
