import React from 'react';
import './Subscribe.css'
const WhyPeopleChose = () => {
        return (
                
                        <div className="footer-top p-lg-5 p-3">
                           <div className="p-lg-3">
                           <h1>Subscribe to get our most exclusive offers</h1>
                           
                           </div>
                           <div className="p-lg-3">
                           <div class="input-group mb-3">
                                <input type="text" className="form-control mx-2" placeholder="Eenter your email to subscribe" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <div className="input-group-append">
                                   <button className="btn btn-light sub-btn mx-2" type="button" id="button-addon2">Subscribe</button>
                                </div>
                         </div>
                           </div>

                        </div>
         
        );
};

export default WhyPeopleChose;