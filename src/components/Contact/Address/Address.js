import React from 'react';

const Address = () => {
    return (
        <div>
            <form className="row g-3">
            <div className="col-md-6">
                <label for="inputPassword4" className="form-label">Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            
            <div className="col-12">
                <label for="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Hsk Tower, Dhaka"/>
            </div>
            <div className="col-md-6">
                <label for="inputCity" className="form-label">City</label>
                <input type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
            </form>            
        </div>
    );
};

export default Address;