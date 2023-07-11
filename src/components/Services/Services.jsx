import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/manish.jpg";
import Glasses from "../../img/Hotel.jpg";
import Humble from "../../img/Mobile.jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Projects</span>
        <spane>
          {/* Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing */}
        </spane>
        <a href={Resume} download>
          <button className="button s-button" style={{marginTop:6}}>Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            lnk={"https://github.com/Ayushi181/Profile_Manish_Sir"}
            heading={"Manish Goswami"}
            detail={"Developed a Profile website of AssociateProfessor of IIITA . Developement Technology: PHP, CSS , MySQL, HTML"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
          lnk={"https://github.com/Ayushi181/HOTEL_MANAGEMENT_PROJECT"}
            emoji={Glasses}
            heading={"Hotel Management"}
            // detail={"Efficiently manages hotel operations, reservations, guest services, billing , and staff scheduling."}
          detail={"This is a comprehensive system designed to streamline and automate various aspects of hotel operations, including reservations, guest services, billing, and staff scheduling."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            lnk={"https://github.com/Ayushi181/MOBILE_SHOP_PROJECT"}
            heading={"Connected Life"}
            detail={"This is a comprehensive system designed to streamline the sales management processes of a mobile store, facilitating seamless customer transactions and stock."}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
