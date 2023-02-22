import React, { useState } from "react";
import { deleteIcon, phoneIcon } from "../../Components/icons/svgIcons";
import Navbar from "../../Components/Navbar";
import userImg from "../../images/navbar-img/userImg.png";

function Teacher() {
  const [visibleModal, setVisibleModal] = useState("d-none");

  return (
    <div className="teacherPage">
      <div className="teacherPageNav">
        <Navbar />
      </div>
      <div className="teacherPageMain container">
        <div className="teacher-header ">
          <h1>Responsible staff and teachers</h1>
          <button onClick={() => setVisibleModal("d-block")}>CREATE</button>
        </div>

        <div className="items container-85">
          <div className="item ">
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

      <div className={visibleModal}>
        <div
          onClick={() => setVisibleModal("d-none")}
          className="w-screen"
        ></div>
        <div className="modalWindows class-modal">
          <div className="modal-inner">
            <div className="modal-title">
              <h1>Create Class</h1>
              <span
                onClick={() => setVisibleModal("d-none")}
                className="closeModal"
              >
                {deleteIcon}
              </span>
            </div>

            <div className="modal-content">
              <form action="">
                <div className="flex ">
                  <div className="modal-input w-full">
                    <label>First name</label>
                    <input className="w-full" type="text" placeholder="Name" />
                  </div>

                  <div className="modal-input w-full">
                    <label>Last name</label>
                    <input className="w-full" type="text" placeholder="Name" />
                  </div>
                </div>

                <div className="flex ">
                  <div className="modal-input w-full">
                    <label>Telephone </label>
                    <input
                      className="w-full"
                      type="text"
                      placeholder="Telephone number"
                    />
                  </div>

                  <div className="modal-input w-full">
                    <label>Email </label>
                    <input className="w-full" type="text" placeholder="Email" />
                  </div>
                </div>

                <div className="modal-input">
                  <label>Adress</label>
                  <input className="w-full" type="text" placeholder="Adress" />
                </div>
                <div className="modal-input">
                  <label>Image </label>
                  <input className="w-full" type="file" placeholder="Image" />
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

export default Teacher;
