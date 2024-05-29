import React from 'react';
import PropTypes from 'prop-types';

function LoadMoreButton({ onClick }) {
  return (
    <button onClick={onClick} className="load-more-button">
      Load More
    </button>
  );
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;