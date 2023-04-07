import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <h3>{category.title}</h3>
      <img src={category.image} alt={category.title} />
      <p>{category.description}</p>
    </div>
  );
};

export default CategoryCard;