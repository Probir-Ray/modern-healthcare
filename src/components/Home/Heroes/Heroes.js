import React, { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';
import './Heroes.css';

const Heroes = () => {
    const [heroes, setHeroes] = useState([]);
    useEffect(() => {
        const url = `https://raw.githubusercontent.com/Probir-Ray/Json-data/main/teams.json`;
        fetch(url).then(res => res.json()).then(data => setHeroes(data))
    }, [])
    return (
        <div className='container text-center mt-5'>
            <h2 className='text-center my-3'>Our Heroes</h2>
            <div className="heroes">
                {
                    heroes.map(hero => <Hero key={hero.id} hero={hero}></Hero>)
                }
            </div>
        </div>
    );
};

export default Heroes;