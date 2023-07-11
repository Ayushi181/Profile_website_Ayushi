import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience4.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    
    <div className="experience" >
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':'',height:120, width:120,fontSize:25,marginRight:-30,marginLeft:-20}}>NetBeans</div>
        {/* <span  style={{color: darkMode?'white':''}}>years </span>
        <span>Experience</span> */}
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':'',height:120, width:120,fontSize:25,marginRight:-30}}>VsCode</div>
        {/* <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>Projects</span> */}
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':'',height:120, width:120,fontSize:25,marginRight:-30}}>MySQL</div>
        {/* <span  style={{color: darkMode?'white':''}}>companies </span>
        <span>Work</span> */}
      </div>
      {/* <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':'',height:120, width:120,fontSize:25,marginRight:-30}}>Bootstrap</div>
        <span  style={{color: darkMode?'white':''}}>companies </span>
        <span>Work</span>
      </div> */}
      {/* <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>Bootstrap</div>
        <span  style={{color: darkMode?'white':''}}>companies </span>
        <span>Work</span>
      </div> */}
    </div>
  );
};


export default Experience;
