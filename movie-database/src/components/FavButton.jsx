import React from 'react';
import PropTypes from 'prop-types';
import heartNoFill from '../assets/heart-nofill.svg';
import heartFill from '../assets/heart-fill.svg';


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
            <button onClick={handleAddFav}><img src={heartNoFill} alt="add to favs" className='heart-icon heart-nofill'/></button> : 
            <button onClick={handleRemoveFav}><img src={heartFill} alt="remove from favs" className='heart-icon heart-fill'/></button>}
        </>
    );
}

FavButton.propTypes = {
    movieObj: PropTypes.object.isRequired,
    remove: PropTypes.bool,
    handleFavClick: PropTypes.func.isRequired,
};

export default FavButton;