import React from 'react';
import './Footer.css';
const Footer = () => {
	return (
		<div className="bg-dark text-white align-center p-5">
			<div className="row p-3">
				<div className="col-lg-4 col-md-4 com-sm-12">
					<img className="img-fluid" src="https://i.ibb.co/hY59rTn/favicon.webp" alt="" />
					<p>
					Established in 1989, ASUS is a multinational company known for the world’s best motherboards and high-quality personal computers, monitors, graphics cards, routers and other technology solutions. Today, ASUS is designing and building next-generation smart technologies to provide incredible experiences that enhance the lives of people everywhere.
					</p>
				</div>
				<div className="col-lg-4 col-md-4 com-sm-12">
					<h5 className="mb-3">About Us</h5>
					<div className="img justify-content-around">
						
						<div className='py-3'>
							<p>Press Room</p>
							<p>Call Us</p>
							<p>Email Us</p>
							<p>Contact Us</p>
						</div>
					</div>
					
				</div>
				
				<div className="col-lg-4 col-md-4 com-sm-12" >
                    <h4>Our services</h4>
                    <div className='py-3'>
						<p>Check Repair Status</p>
						<p>Find Service Locations</p>
						<p>Product Registration</p>
						<p>ASUSTOR Inc.</p>
						<p>Gimbal</p>
					</div>
                </div>
			</div>
            <hr/>
            <p> &copy; zidanislam 2021. All rights reserved.</p>
		</div>
	);
};

export default Footer;
