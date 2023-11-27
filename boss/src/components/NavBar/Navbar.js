import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";
import "bootstrap/dist/js/bootstrap";
import logo1 from '../../app images/arjun-mj-IFc8fnhneQ0-unsplash.jpg'
import logo2 from '../../app images/avin-cp-o3zjt1jDRkQ-unsplash.jpg'
import logo3 from '../../app images/rashi-raffi-pBx1VvMCL24-unsplash.jpg'
// imported for slideshow
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Navbar = () => {
    // slide show images

   const images = [
        {img:logo1},
        {img:logo2},
        {img:logo3}

    ];
   
    return (
        <div>
            {/* main */}
            <main>
                {/* heading land */}

                <div className="landing-Heading">
                    <h1 className="heading-land">
                        {" "}
                        <span data-text="Sweet">DISCOVER</span>
                        <span data-text="Stuff">the Kerala</span>
                    </h1>

                    <button className="landing-button">Explore Now</button>
                </div>

                {/* end land */}
            </main>
            {/* section 2  */}
            <div className="section2">
                {/* this is the code in Imported Slideshow content */}
                <Carousel autoPlay infiniteLoop interval={3000}>
                    {images.map((image, index) => {
                         <img src={image}></img>
                        return(
                           
                            
                            <div className="testlayer" key={index}>
                            {/* <img className="imagelayer" src={image} alt="content" /> */}
                            <img className="imagelayer" src={image.img} alt="content" />
                        </div>
                        )
                       
                        })}
                </Carousel>

                {/* for informations */}
                <div className="infotext">
                    <div className="info">
                        <h1 style={{ color: "darkblue", fontWeight: "bold" }}>Explore Tour Pakage</h1>
                        <p style={{ fontWeight: "bold" }}>
                            Planning for a Kerala trip in 2022 - 2023? Here are our most popular and trending Kerala tour
                            packages! Pick your favorite and explore the best of God’s Own Country!.If you wish to dive
                            deeper and soak in the culture of Kerala, you should opt one from our more than 100 Kerala tour
                            packages. Whatever the budget, from standard to luxury, our Kerala tour packages are
                            customizable as per your wants. Be it a sightseeing tour across the beaches of Kerala, a tour in
                            the lush green spice plantations, a wildlife tour in the untouched forests of Thekkady or a
                            romantic getaway Kerala tour package for the newly wed. We offer them all!
                        </p>
                    </div>

                    {/* for cards  */}
                    <div className="popularplace">
                        <h1 style={{ color: "lightdark" }}>Popular Places</h1>
                        {/* cards starting */}
                        <div className="cards">
                            <div className="card">
                                <img src={logo1} alt="" srcset="" />
                                <h3>Heading</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sequi magni quidem har</p>
                                <button>More</button>
                            </div>
                            <div className="card">
                                <img src={logo1} alt="" srcset="" />
                                <h3>Heading</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sequi magni quidem har</p>
                                <button>More</button>
                            </div>
                            <div className="card">
                                <img src={logo1} alt="" srcset="" />
                                <h3>Heading</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sequi magni quidem har</p>
                                <button>More</button>
                            </div>
                            <div className="card">
                                <img src={logo1} alt="" srcset="" />
                                <h3>Heading</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sequi magni quidem har</p>
                                <button>More</button>
                            </div>
                        </div>
                        {/* cards end */}

                        {/* end */}
                    </div>
                </div>
                <div className="booking">
                    <div className="redytobook">
                        <h2>Are You Redy to Book a Car ?</h2>
                        <p>We Offer A Wide Range Of Experiences To Help You Get The Perfect Smile</p>
                        <button>Book Now</button>
                    </div>
                </div>
                {/* section 2 end */}
                {/* Footer */}
                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h3>About Us</h3>
                            <p>We are passionate about travel...</p>
                        </div>
                        <div className="footer-section">
                            <h3>Contact</h3>
                            <p>Email: test@example.com</p>
                            <p>Phone: 123-456-7890</p>
                        </div>
                        <div className="footer-section">
                            <h3>Follow Us</h3>
                            <a href="#">Facebook</a>
                            <a href="#">Twitter</a>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2023 Your Travel Website. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};
export default Navbar;
