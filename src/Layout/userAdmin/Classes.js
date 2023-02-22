import React, { useState } from "react";
import {
  deleteIcon,
  editIcon,
  studentIcon,
} from "../../Components/icons/svgIcons";
import Navbar from "../../Components/Navbar";
import "../layout.css";
import userImg from "../../images/navbar-img/userImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";



function Classes() {
  const [visibleModal,setVisibleModal] = useState('d-none')



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
      <div className="main-box container">
        <div className="clases-header">
          <h1>All Classes</h1>
          <button onClick={()=> setVisibleModal('d-block')} >CREATE</button>
        </div>
        <div className="items container-95">
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

        <div className={visibleModal}>
          <div onClick={()=> setVisibleModal('d-none')} className="w-screen"></div>
          <div className="modalWindows class-modal">
            <div className="modal-title">
              <h1>Create Class</h1>
              <span onClick={() => setVisibleModal('d-none')} className="closeModal">{deleteIcon}</span>
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
                    <input type="text" placeholder="Name" />
                  </div>

                  <div className="modal-input">
                    <label>Select BG color</label>
                    <select className="w-full" name="selectColor" id="color">
                      <option value="">Yellow</option>
                      <option value="red">Red</option>
                      <option value="green">green</option>
                      <option value="blue">Blue</option>
                    </select>
                  </div>

                  <div className="modal-input">
                    <label>Text color</label>
                    <select className="w-full" name="selectColor" id="color">
                      <option value="">White</option>
                      <option value="">Yellow</option>
                      <option value="red">Red</option>
                      <option value="green">green</option>
                      <option value="blue">Blue</option>
                    </select>
                  </div>
                </div>

                <div className="modal-input">
                  <label>Choose Studdents</label>
                  <select className="w-full" name="selectColor" id="color">
                    <option value="">White</option>
                    <option value="">Yellow</option>
                    <option value="red">Red</option>
                    <option value="green">green</option>
                    <option value="blue">Blue</option>
                  </select>
                </div>
                <div className="modal-input">
                  <label>Choose Students</label>
                  <textarea className="w-full" name="" id="" cols="30" rows="4"></textarea>
                </div>

                <div className="btn-group">
                  <button>DELELTE</button>
                  <button className="btn-2">SAVE</button>
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
