import React, {useState} from 'react';
import CountryDetails from './CountryDetails';

const DetailButton = ({setShowDetails, setCountryToShowDetails}) => {
    const showCountryDetails = () => {
        setShowDetails(true);
    };
    const hideCountryDetails = () => {
        setShowDetails(false);
    };
    return (
        <>
            <button key="show" onClick={() => showCountryDetails()}>
                show
            </button>
            <button key="hide" onClick={() => hideCountryDetails()}>
                hide
            </button>
        </>
    );
};

export default DetailButton;
