//CategoryCard.js

import React from 'react';

const CategoryCard = ({ title, image, description }) => {
  return (
    <div className="category-card">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
    </div>
  );
};

export default CategoryCard;