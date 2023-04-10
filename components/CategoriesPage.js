// CategoriesPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import activities from './Activities.js';
import CategoryCard from './CategoryCard'; // Import CategoryCard here
import './CategoriesPage.css'; // Import CSS here
import CategoryGrid from './CategoryGrid';
import beachesImg from '../images/beaches.jpg';
import culturalexperiencesImg from '../images/cultural_experiences.jpg';
import outdooradventuresImg from '../images/outdoor_adventures.jpg';
import watersportsImg from '../images/water_sports.jpg';
import foodwineexperiencesimg from '../images/food_wine_experiences.jpg';
import nightlifeentertainmentImg from '../images/nightlife_entertainment.jpg';

  const categories = [
    { name: 'beaches_and_sightseeing', title: 'Beaches & Sightseeing', image: beachesImg },
    { name: 'cultural_experiences_and_historical_sites', title: 'Cultural Experiences & Historical Sites', image: culturalexperiencesImg },
    { name: 'hiking_and_outdoor_adventures', title: 'Hiking & Outdoor Adventures', image: outdooradventuresImg },
    { name: 'water_activities', title: 'Water Activities', image: watersportsImg },
    { name: 'food_wine_experiences', title: 'Food & Wine Experiences', image: foodwineexperiencesimg},
    { name: 'nightlife_entertainment', title: 'Nightlife & Entertainment', image: nightlifeentertainmentImg},
  ];
  

const CategoryPage = () => {
  return (
    <div className="category-page">
      <h2>Categories</h2>
      <div className="category-list">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/categories/${category.name}`} // Use category.name instead of category.title
            style={{ textDecoration: 'none' }} // Remove link styles
          >
            <CategoryCard
              title={category.title}
              image={category.image}
              description={category.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;