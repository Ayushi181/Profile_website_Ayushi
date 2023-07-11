import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
// import boy from "../../img/boy.png";
import boy from "../../img/Ayu_study2.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Ayushi Singla</span>
          <span >
          I am Ayushi Singla, a highly skilled professional with a strong academic background and a passion for software development. My coursework in B.Tech Information Technology at Indian Institute of Information Technology , Allahabad (IIITA) has exposed me to a wide range of subjects, including DSA , OOPS , DBMS, Computer Networking and Introduction to C/C++. This comprehensive education has provided me with a solid foundation in Information Technology and practical knowledge.
          <br></br>
          <br></br>
          In addition to my academic pursuits, I have honed my skills in various programming languages and frameworks. I have hands-on experience in developing Full Stack web applications and working with databases MySQL. My commitment to continuous learning and strong problem-solving skills enables me to stay updated with the latest technologies and industry trends.
          <br></br>
          <br></br>
          Thriving in challenging environments, I approach projects with dedication and enthusiasm. Eager to contribute to innovative software development, I bring dedication, motivation, and exceptional results. To explore my projects, scroll down.


          </span>
        </div>
        {/* <Link to="contact" smooth={true} spy={true}> */}
          {/* <button className="button i-button">Hire me</button> */}
        {/* </Link> */}
        {/* social icons */}
        <div className="i-icons">
        <a href="https://github.com/Ayushi181" download>
          <img src={Github} alt=""/>
          </a>
          <a href="https://www.linkedin.com/in/ayushi-singla-315189218/" download>
          <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/ayushisingla181/" download>
          <img src={Instagram} alt="" />
          </a>
          
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        {/* <img src={Vector1} alt="" />
        <img src={Vector2} alt="" /> */}

        <img src={boy} alt="" />

        
        




        {/* animation ayu */}

        
        {/* <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        /> */}

        {/* <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div> */}

        {/* animation ayu*/}
        {/* <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div2"
        > */}

          {/* floatinDiv mein change hy dark mode ka ayu*/}
          {/* <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default Intro;
