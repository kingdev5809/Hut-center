import React from "react";
import {
  deleteIcon,
  editIcon,
  studentIcon,
} from "../../Components/icons/svgIcons";
import Navbar from "../../Components/Navbar";
import "../layout.scss";
import userImg from "../../images/navbar-img/userImg.png";

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

        <div className="d-none">
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
                  <input type="text" placeholder="Name" />
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
