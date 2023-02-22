import React from "react";
import { phoneIcon } from "../../Components/icons/svgIcons";
import Navbar from "../../Components/Navbar";
import userImg from "../../images/navbar-img/userImg.png";

function Teacher() {
  return (
    <div className="teacherPage">
      <div className="teacherPageNav">
        <Navbar />
      </div>
      <div className="teacherPageMain">
        <div className="teacher-header">
            <h1>Responsible staff and teachers</h1>
            <button>CREATE</button>
        </div>

        <div className="items">
          <div className="item">
            <img src={userImg} alt="" />
            <h2>Shermorad Holmadov</h2>
            <h4>Teacher</h4>
            <p>{phoneIcon}0706077070</p>
            <h5>@ info@onic.design</h5>
          </div>

          <div className="item">
            <img src={userImg} alt="" />
            <h2>Shermorad Holmadov</h2>
            <h4>Teacher</h4>
            <p>{phoneIcon}0706077070</p>
            <h5>@ info@onic.design</h5>
          </div>

          <div className="item">
            <img src={userImg} alt="" />
            <h2>Shermorad Holmadov</h2>
            <h4>Teacher</h4>
            <p>{phoneIcon}0706077070</p>
            <h5>@ info@onic.design</h5>
          </div>


          <div className="item">
            <img src={userImg} alt="" />
            <h2>Shermorad Holmadov</h2>
            <h4>Teacher</h4>
            <p>{phoneIcon}0706077070</p>
            <h5>@ info@onic.design</h5>
          </div>

          <div className="item">
            <img src={userImg} alt="" />
            <h2>Shermorad Holmadov</h2>
            <h4>Teacher</h4>
            <p>{phoneIcon}0706077070</p>
            <h5>@ info@onic.design</h5>
          </div>


          <div className="item">
            <img src={userImg} alt="" />
            <h2>Shermorad Holmadov</h2>
            <h4>Teacher</h4>
            <p>{phoneIcon}0706077070</p>
            <h5>@ info@onic.design</h5>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Teacher;
