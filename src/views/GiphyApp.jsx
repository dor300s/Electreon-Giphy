import React, { useState, useEffect, useRef } from 'react';
import { GiphyList } from '../components/GiphyList';
import { get } from '../services/giphyService';
import { Logo } from '../components/Logo';
import { Loader } from '../components/Loader';

export const GiphyApp = () => {
    const [query, setQuery] = useState('');
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const [offset, setOffset] = useState(0);
    const timeout = useRef(null);

    useEffect(() => {


        if (!query) return;

        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {

            setIsLoading(true);

            get(query)
                .then(res => setGifs(res.data))
                .finally(() => setIsLoading(false))

        }, 1000);

    }, [query])


    const handleChange = ({ target }) => {
        setQuery(target.value);
    }

    return (
        <div className="main-container">
            <div className="search-container flex align-center space-between">
                <Logo />
                <input type="text" placeholder="Search" onChange={handleChange} />
                <Loader show={isLoading} />
            </div>
            <GiphyList gifs={gifs} />
        </div>
    )
}