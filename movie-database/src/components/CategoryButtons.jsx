import React from 'react';
import PropTypes from 'prop-types';
import '../scss/styles.scss';

const CategoryButtons = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="category-buttons">
      <button
        onClick={() => onCategoryChange('nowPlaying')}
        className={selectedCategory === 'nowPlaying' ? 'selected' : ''}
      >
        Now Playing
      </button>
      <button
        onClick={() => onCategoryChange('popular')}
        className={selectedCategory === 'popular' ? 'selected' : ''}
      >
        Popular
      </button>
      <button
        onClick={() => onCategoryChange('topRated')}
        className={selectedCategory === 'topRated' ? 'selected' : ''}
      >
        Top Rated
      </button>
      <button
        onClick={() => onCategoryChange('upcoming')}
        className={selectedCategory === 'upcoming' ? 'selected' : ''}
      >
        Upcoming
      </button>
    </div>
  );
};

CategoryButtons.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryButtons;