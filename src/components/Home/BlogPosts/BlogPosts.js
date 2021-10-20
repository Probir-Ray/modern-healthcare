import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './BlogPosts.css';

const BlogPosts = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    useEffect(()=> {
        fetch('blog-post.json').then(res => res.json()).then(data => setBlogPosts(data));
    })
    return (
        <div className="container my-5">
            <h2 className="text-center my-4">Blog Post</h2>
            <div className="row g-3">
            {
                blogPosts.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
            </div>
        </div>
    );
};

export default BlogPosts;