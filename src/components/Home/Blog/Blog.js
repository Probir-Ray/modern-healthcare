import React from 'react';

const Blog = (props) => {
    const {title, shortDesc, longDesc, img, date} = props.blog;
    return (
        
            <div className="col-md-6">
                <div className="card card-default">
                    <img className="card-img-top img-fluid" src={img} alt="" />
                    <div className="card-body">
                        <h5 className="card-text">{title}</h5>
                        <h6>{date}</h6>
                        <p>{shortDesc}</p>
                    </div>
                </div>
            </div>
        
    );
};

export default Blog;