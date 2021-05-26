import React from 'react';
import { GiphyPreview } from './GiphyPreview';

export const GiphyList = ({ gifs }) => {

    return (
        <div className="gifs-container">
            {gifs.map(gif => <GiphyPreview key={gif.id} gif={gif} />)}
        </div>
    )
}