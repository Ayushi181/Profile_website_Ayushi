import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience2.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    
    <div className="experience" id=''>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':'',height:120, width:120,fontSize:25,marginRight:-30,marginLeft:-20,marginTop:-60}}>HTML</div>
        {/* <span  style={{color: darkMode?'white':''}}>years </span>
        <span>Experience</span> */}
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':'',height:120, width:120,fontSize:25,marginRight:-30,marginTop:-60}}>CSS</div>
        {/* <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>Projects</span> */}
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':'',height:120, width:120,fontSize:25,marginRight:-30,marginTop:-60}}>C++</div>
        {/* <span  style={{color: darkMode?'white':''}}>companies </span>
        <span>Work</span> */}
      </div>
      {/* <div className="achievement">
        
        <div className="circle" style={{color: darkMode?'var(--orange)':'',height:120, width:120,fontSize:25,marginRight:-30,marginTop:-60}}>C</div>
        <span  style={{color: darkMode?'white':''}}>years </span>
        <span>Experience</span>
      </div> */}
      {/* <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>C</div>
        <span  style={{color: darkMode?'white':''}}>companies </span>
        <span>Work</span>
      </div> */}
    </div>
  );
};


export default Experience;
