import React from 'react';

const Services = () => {
    return (
        <div>
            {/* Dark background section */}
            <div className="bg-dark text-white py-5">
                <div className='container'>
                    <div className="row justify-content-center">
                        {/* Center-aligned content */}
                        <div className=" col-lg-8 text-center">
                            {/* Main heading */}
                            <h1 className="display-4 mb-3">Our Services</h1>
                            {/* Breadcrumb navigation */}
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center bg-transparent p-0 m-0">
                                    <li className="breadcrumb-item"><a href="#" className="text-white">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Services</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* White background section (optional) */}
            <div className="bg-light py-5">
                <div className='container'>
                    <div className='row'>
                        {/* Add your content here */}
                        <div className='col-lg-12'>
                            <p>This is where you can add more content about your services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;