// CategoryCard.js

import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ title, image, description }) => {
  return (
    <div className="category-card">
      <img className="category-image" src={image} alt={title} />
      <h3 className="category-title">{title}</h3>
    </div>
  );
};

export default CategoryCard;