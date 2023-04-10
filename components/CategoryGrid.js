// CategoryGrid.js

import React from 'react';
import './CategoryGrid.css';
import CategoryCard from './CategoryCard';

const CategoryGrid = ({ category, title, activities }) => {
  const filteredActivities = activities.filter(activity => activity.category === category);

  return (
    <div className="category-grid">
      <h2>{title}</h2>
      <div className="grid-container">
        {filteredActivities.map((activity, index) => (
          <CategoryCard
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

export default CategoryGrid;
