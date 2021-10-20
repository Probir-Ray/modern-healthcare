import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Heroes from '../Heroes/Heroes';
import BlogPosts from '../BlogPosts/BlogPosts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Heroes></Heroes>
            <BlogPosts></BlogPosts>
        </div>
    );
};

export default Home;