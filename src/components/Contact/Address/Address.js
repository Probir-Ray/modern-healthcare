import React from 'react';

const Address = () => {
    return (
        <div className="my-5 row text-center">
            <div className="card card-default col-md-5 bg-primary mb-5 text-white">
                <div className="card-header">BD Address</div>
                <div className="card-body">
                    <h5>Phone: +88017-666333</h5>
                    <p>Address: LRK, Gulshan, Dhaka</p>
                </div>
            </div>
            <div className="col-1"></div>
            <div className="card card-default col-md-5 bg-danger text-white mb-5">
                <div className="card-header">USA Address</div>
                <div className="card-body">
                    <h5>Phone: +993-666333</h5>
                    <p>Address: 113 Street, Manhaton, Newyork</p>
                </div>
            </div>
            <div className="card card-default col-md-5 bg-info text-white mb-5">
                <div className="card-header">UK Address</div>
                <div className="card-body">
                    <h5>Phone: +731-666333</h5>
                    <p>Address: 64 Cantbery, Landon</p>
                </div>
            </div>
            <div className="col-1"></div>
            <div className="card card-default col-md-5 bg-primary text-white">
                <div className="card-header">UAE Address</div>
                <div className="card-body">
                    <h5>Phone: +234-666333</h5>
                    <p>Address: 11 Dubai City, Dubai</p>
                </div>
            </div>
        </div>
    );
};

export default Address;