import React from 'react';
import PropTypes from 'prop-types';

function FavButton({ movieObj, remove = false, handleFavClick }) {

    function handleAddFav() {
        handleFavClick(true, movieObj);
    }

    function handleRemoveFav() {
        handleFavClick(false, movieObj);
    }

    return (
        <>
            {!remove ? 
            <button onClick={handleAddFav}>Add To Favs</button> : 
            <button onClick={handleRemoveFav}>Remove From Favs</button>}
        </>
    );
}

FavButton.propTypes = {
    movieObj: PropTypes.object.isRequired,
    remove: PropTypes.bool,
    handleFavClick: PropTypes.func.isRequired,
};

export default FavButton;