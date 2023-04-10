//ActivitiesContext.js

import { createContext, useContext, useState } from 'react';

const ActivitiesContext = createContext();

export const useActivities = () => {
  const context = useContext(ActivitiesContext);
  if (!context) {
    throw new Error('useActivities must be used within a ActivitiesProvider');
  }
  return context;
};

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]); // Replace the initial state with your activities data

  return (
    <ActivitiesContext.Provider value={{ activities, setActivities }}>
      {children}
    </ActivitiesContext.Provider>
  );
};
