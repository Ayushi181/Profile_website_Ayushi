import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/Sir.png";
import profilePic2 from "../../img/Hotel2.png";
import profilePic3 from "../../img/Mobile2.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    // {
    //   img: profilePic4,
    //   review:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    // },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Project </span>
        <br></br>
        <span>Description </span>
        <span></span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {/* {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span style={{fontSize:30}}>Associate Professor Profile <br></br> Of IIITA</span>
              </div>
              <div className="testimonial2">
                <span>{client.review}</span>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })} */}


        <SwiperSlide>
        <div className="testimonial">
                <img src={profilePic1} alt="" />
                <span style={{fontSize:30}}>Associate Professor Profile <br></br> Of IIITA</span>
              </div>
              <div className="testimonial2">
                <span>-Well Designed and Functional , Easy to use , Optimised , Fast Loading , Responsive , Simple and Attractive Design</span>
                <span>-Development Technology : PHP , CSS , MySQL , HTML .</span>
                <span>Currently Running : </span>
                {/* <button href="https://manishkumarwebsite.000webhostapp.com/home.php">Live Demo</button> */}
                {/* <span>-Currently Running:<br></br>https://manishkumarwebsite.000webhostapp.com/home.php</span> */}
                <a href="https://manishkumarwebsite.000webhostapp.com/home.php" download>
          <button className="button s-button" style={{marginTop:6}}>Live Demo</button>
        </a>
        
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testimonial">
                <img src={profilePic2} alt="" />
                <span style={{fontSize:30}}>Hotel Management <br></br>Project </span>
              </div>
              <div className="testimonial2">
                <span>-The hotel management project is a software solution that efficiently manages and organizes hotel operations, enabling seamless reservation management, guest services, billing, inventory control, and staff scheduling, ultimately enhancing the overall guest experience.</span>
                <span>-Developement Technology : JavaFX , MySQL , DBMS.</span>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testimonial">
                <img src={profilePic3} alt="" />
                <span style={{fontSize:30}}>Connected Life<br></br></span>
              </div>
              <div className="testimonial2">
                <span>-Revolutionize your mobile shopping experience with our cutting-edge software solution that seamlessly manages sales, inventory, and customer transactions for your mobile phone store.</span>
                <span>-Developement Technology : JavaFX , MySQL , DBMS.</span>
              </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Testimonial;
