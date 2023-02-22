import React from "react";
import {
  deleteIcon,
  editIcon,
  studentIcon,
} from "../../Components/icons/svgIcons";
import Navbar from "../../Components/Navbar";
import "../layout.scss";
import userImg from "../../images/navbar-img/userImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";



function Classes() {
  const smallData = [
    {
      title: "Engelska A2",
      name: "Shermorad Holmatov",
      color: "bg-red-500",
    },
    {
      title: "Engelska A2",
      name: "Shermorad Holmatov",
      color: "bg-red-500",
    },
    {
      title: "Engelska A2",
      name: "Shermorad Holmatov",
      color: "bg-red-500",
    },
    {
      title: "Engelska A2",
      name: "Shermorad Holmatov",
      color: "bg-red-500",
    },
    {
      title: "Engelska A2",
      name: "Shermorad Holmatov",
      color: "bg-red-500",
    },
    {
      title: "Engelska A2",
      name: "Shermorad Holmatov",
      color: "bg-red-500",
    },
    {
      title: "Engelska A2",
      name: "Shermorad Holmatov",
      color: "bg-red-500",
    },
    {
      title: "Engelska A2",
      name: "Shermorad Holmatov",
      color: "bg-red-500",
    },
    {
      title: "Engelska A2",
      name: "Shermorad Holmatov",
      color: "bg-red-500",
    },
  ];
  return (
    <div className="classes-page flex ">
      <div className="navbar-box">
        <Navbar />
      </div>
      <div className="main-box">
        <div className="clases-header">
          <h1>All Classes</h1>
          <button>CREATE</button>
        </div>
        <div className="items container-85">
          {smallData.map((item) => (
            <div className="item">
              <img src={userImg} alt="" />
              <div className="item-box">
                <h3> {item.title} </h3>
                <h4>
                  <b>Teacher:</b> {item.name}
                </h4>
                <div className="itemBtn">
                  <span>
                    <i className="svg1">{studentIcon}</i> Student:14{" "}
                  </span>{" "}
                  <span>
                    <i className="svg2">{editIcon}</i> Edit{" "}
                  </span>
                  <span>
                    <i className="svg3">{deleteIcon}</i> Delete
                  </span>
                </div>
              </div>
              <div className="item-box-2"></div>
            </div>
          ))}
        </div>

        <div className="">
          <div className="w-screen"></div>
          <div className="modalWindows class-modal">
            <div className="modal-title">
              <h1>Create Class</h1>
              <span>{deleteIcon}</span>
            </div>

            <div className="modal-content">
              <form action="">
                <div className="modal-input">
                  <label>Class name</label>
                  <input className="w-full" type="text" placeholder="Name" />
                </div>

                <div className="flex-3">
                  <div className="modal-input">
                    <label>Select teacher</label>
                    <div className="select-box">
                        <div className="select-head">
                          <p>Yellow</p>
                          <i><FontAwesomeIcon icon={faChevronUp}/></i>
                        </div>
                        <div className="select-content">
                            <p>Yellow</p>
                            <p>Red</p>
                            <p>Green</p>
                            <p>Blue</p>
                        </div>

                    </div>
                  </div>

                  <div className="modal-input">
                    <label>Select BG color</label>
                    <input className="w-full" type="text" placeholder="Name" />
                  </div>

                  <div className="modal-input">
                    <label>Class name</label>
                    <input className="w-full" type="text" placeholder="Name" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;
