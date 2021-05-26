import React from 'react';

export const GiphyPreview = ({ gif }) => {

    return (
        <div className="gif">
            <img src={gif.images.downsized.url}/>
        </div>
    )
}