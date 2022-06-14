import "./Modal.css";
import "../conference/CreateConf.css";
import "../conference/Conf.css";
import "../conference/MainConf.css";

import { notifications } from "./data";

import ChatIcon from "@mui/icons-material/Chat";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";

function Modal({ setOpenModal }) {
  console.log(notifications.length);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <CancelRoundedIcon
            fontSize="large"
            onClick={() => setOpenModal(false)}
          />

          {/* <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button> */}
        </div>
        {/* <div className="title">
          <h1>Notification</h1>
        </div> */}
        <div className="gg">
          {notifications.map((notification) => {
            return (
              <div className="notificationDiv">
                <div className="icon">
                  <CircleNotificationsRoundedIcon
                    onClick={() => console.log("clicked")}
                    fontSize="large"
                  />
                </div>
                <div className="subject">{notification.subject}</div>

                {notification.type === "invitation" && (
                  <div className="icons">
                    <div className="check">
                      <CheckCircleRoundedIcon fontSize="large" />
                    </div>
                    <div className="uncheck">
                      <CancelRoundedIcon fontSize="large" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {/* <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div> */}
      </div>
    </div>
  );
}

export default Modal;
