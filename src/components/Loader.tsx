import React from 'react';
import './Loader.scss';

export const Loader = () => {
    return (
        <div className="loading">
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}