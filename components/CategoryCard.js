import React from 'react';
import { activities } from './Activities';
import CategoryCard from './CategoryCard';

const categories = [
  {
    id: 1,
    title: 'Beaches & Sightseeing',
    image: 'beaches_sightseeing.jpg',
    description: 'Discover beautiful beaches and scenic lookouts around Guam.',
  },
  {
    id: 2,
    title: 'Water Activities',
    image: 'water_activities.jpg',
    description: 'Enjoy snorkeling, scuba diving, and other water-based activities.',
  },
  {
    id: 3,
    title: 'Wildlife & Nature',
    image: 'wildlife_nature.jpg',
    description: 'Explore Guam\'s diverse wildlife and natural landscapes.',
  },
  {
    id: 4,
    title: 'Cultural Experiences & Historical Sites',
    image: 'cultural_experiences.jpg',
    description: 'Immerse yourself in Guam\'s rich history, culture, and heritage.',
  },
  {
    id: 5,
    title: 'Outdoor Activities',
    image: 'outdoor_activities.jpg',
    description: 'Experience hiking, caving, and other outdoor adventures.',
  },
  {
    id: 6,
    title: 'Amusement Parks',
    image: 'amusement_parks.jpg',
    description: 'Visit water parks and other amusement parks in Guam.',
  },
  {
    id: 7,
    title: 'Motorsports',
    image: 'motorsports.jpg',
    description: 'Enjoy motor racing and other motorsports activities.',
  },
  {
    id: 8,
    title: 'Shopping',
    image: 'shopping.jpg',
    description: 'Shop at popular retailers, local markets, and shopping centers.',
  },
];

const CategoryPage = () => {
  return (
    <div className="category-page">
      <h2>Categories</h2>
      <div className="category-list">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
