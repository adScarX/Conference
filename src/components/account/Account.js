import React, { useEffect, useState, useRef } from "react";
import "./account.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { saveAs } from "file-saver";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HistoryIcon from "@mui/icons-material/History";
import image_down from "./../../img/pdf.png";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LogoutIcon from "@mui/icons-material/Logout";

function Account() {
  let host = "http://127.0.0.1:8000";
  let navigate = useNavigate();
  let navigate_2 = useNavigate();
  let navigate_4 = useNavigate();
  const hiddenFileInput = React.useRef(null);

  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization =
<<<<<<< HEAD
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU1MjkyNzMxLCJpYXQiOjE2NTUyNTY3MzEsImp0aSI6IjM4ODM0NGI2OTI5ZjQzZGU5NjRhMDc5NzMzNGM3NzJjIiwidXNlcl9pZCI6IjNlNDJiYWJjLWI3YTUtNGZjZC1hNTVlLWM2YjY3NmFiZGI1NiJ9.G592EE8qtOUxOALsChAxzzblA7b1ePUvsYBL2LDzdsw";
=======
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU1NDMzMDY5LCJpYXQiOjE2NTUzOTcwNjksImp0aSI6IjNhZWQ4NmFhMzZlOTQ5Yzg5N2RjYzU4YzVhNDFjM2ZlIiwidXNlcl9pZCI6IjQ4ZWYyMGU3LWQwNWItNGYxMS1iZmUxLTFhMTU1MjFkNDA3OSJ9.Q1kfPtvKLtxe8Wz3CC353se5vyURHV7G8ac-liPPhOY";
>>>>>>> 0facdfce9925e736ce52196bc7375ef186df48af
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // for upload image

  const [image, setimage] = useState([]);
  const [data_profile, setdata_profile] = useState({});
  let path = "";
  const [bool, setbool] = useState(false);

  // const uploadImage = (e) => {
  //   const data = new FormData();
  //   data.append("profile_picture", e.target.files[0]);
  //   console.log(data);
  //   path = e.target.path;
  //   axios.put(host + "/users/profile", data, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   });
  // };

  // useEffect(()=>{
  //  uploadImage()
  // },[bool])

  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  useEffect(() => {
    axios
      .get(host + "/users/profile")
      .then((reponse) => {
        console.log(reponse.data);
        setdata_profile(reponse["data"]);
        setimage(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [image]);

  // const refreshPage = ()=>{
  //     window.location.reload();
  //  }
  //my articles
  const [article, setarticle] = useState([]);
  useEffect(() => {
    axios
      .get(host + "/articles/list/path")
      .then((artc) => {
        console.log(artc["data"]);
        setarticle(artc["data"]);
      })
      .catch((err) => {
        console.log("failed");
      });
  }, []);

  const saveFile = (urll) => {
    saveAs(urll, "article.pdf");
  };

  const Getartcl = ({ data }) => {
    const ref = useRef(null);
    return (
      <>
        {data.map((cle) => {
          return (
            <>
              <div className="confDiv_1" ref={ref}>
                <div className="info">
                  <div className="test_1">
                    <div className="title_1">{cle.title}</div>
                    <div className="host_1">
                      <h5>
                        {cle.conference_id.title} - {cle.date_of_creation}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="etat">
                  {cle.status === "waiting for authors" ? (
                    <HistoryIcon className="icon1" />
                  ) : cle.status === "accepted" ? (
                    <CheckCircleOutlineIcon className="icon2" />
                  ) : cle.status === "refused" ? (
                    <DoDisturbIcon className="icon3" />
                  ) : cle.status === "accepted to review" ? (
                    <HourglassBottomIcon className="icon4" />
                  ) : (
                    ""
                  )}
                </div>
                <div className="downfile">
                  <img
                    src={image_down}
                    alt=""
                    onClick={() => saveFile(cle.article_url)}
                    className="down"
                  />
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  // my conferences
  const [confs, setconfs] = useState([]);
  useEffect(() => {
    axios
      .get(host + "/conferences/conferences_creator/list/path")
      .then((conf) => {
        console.log(conf["data"]);
        setconfs(conf["data"]);
      });
  }, []);

  const Getconfs = ({ data }) => {
    const ref = useRef(null);
    return (
      <>
        {data.map((cle) => {
          return (
            <>
              <div className="confDiv_2" ref={ref}>
                <div className="info_2">
                  <div className="test_2">
                    <div className="title_2">{cle.title}</div>
                    <div className="host_2">
                      <h5>
                        {cle.name_of_host},{cle.location} - {cle.start_date} ,{" "}
                        {cle.end_date}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="etat_2">
                  {cle.status === "pending" ? (
                    <HistoryIcon className="icon1" />
                  ) : cle.status === "accepted" ? (
                    <CheckCircleOutlineIcon className="icon2" />
                  ) : cle.status === "refused" ? (
                    <DoDisturbIcon className="icon3" />
                  ) : cle.status === "accepted to review" ? (
                    <HourglassBottomIcon className="icon4" />
                  ) : (
                    ""
                  )}
                </div>
                <div className="downfile_2">
                  <img src={host + cle.logo} alt="" className="down" />
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  // waiting for reviewr
  const [waiting, setwaiting] = useState([]);
  useEffect(() => {
    axios.get(host + "/articles/listforreviewer/path").then((reslt) => {
      console.log(reslt["data"]);
      setwaiting(reslt["data"]);
    });
  }, []);

  const Getwait = ({ data }) => {
    const ref = useRef(null);
    return (
      <>
        {data.map((cle) => {
          const { id } = cle;
          return (
            <>
              <div
                className="confDiv_3"
                key={id}
                onClick={() => navigate_4("/Edit_art/" + id)}
              >
                <div className="info_3">
                  <div className="test_3">
                    <div className="title_3">{cle.title}</div>
                    <div className="host_3">
                      <h5>
                        {cle.conference_id.title} - {cle.start_date}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="downfile_3">
                  <img
                    src={image_down}
                    alt=""
                    onClick={() => saveFile(cle.article_url)}
                    className="down"
                  />
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  //tableau (viewpager)
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="account_page" id="account">
      <div className="navv">
        <div className="navbar_11">
<<<<<<< HEAD
          <ul className="navbar_list_11">
            <Link to="/" className="link">
              <div className="list_item_11">
                <p>Home</p>
              </div>
            </Link>

            <div
              className="list_item_11"
              onClick={() => {
                navigate_2("/MainConf");
              }}
            >
              <p>Conferences</p>
=======
        <div className="navbar_list_11">
          <Link to="/" className="link">
            <div className="list_item_11"><p>Home</p></div>
          </Link>

          <div
            className="list_item_11"
            onClick={() => {
              navigate_2("/MainConf");
            }}
          >
            <p>Conferences</p>
          </div>

          <Link to="/#footer" smooth className="link">
            <div className="list_item_11"><p>About us</p> </div>
          </Link>
          <Link to="/#footer" smooth className="link">
            <div className="list_item_11"><p>Contact us</p> </div>
          </Link>

          <div
            className="list_item_11"
            onClick={() => {
              navigate("/account");
            }}
          >
           <p>Account</p> 
          </div>
        </div>
      </div>
      </div>
      
      <div className="proff">
      <div className="container_acc">
        <div className="container_acc_l">

          {/*  ////////////////////////////// */}
          <div className="container_acc_l_logo">
            <div className="form-controll">
              <input type="file" onChange={()=>{setbool(!bool)}} name="file_up" />
>>>>>>> 0facdfce9925e736ce52196bc7375ef186df48af
            </div>

            <Link to="/#footer" smooth className="link">
              <div className="list_item_11">
                <p>About us</p>{" "}
              </div>
            </Link>
            <Link to="/#footer" smooth className="link">
              <div className="list_item_11">
                <p>Contact us</p>{" "}
              </div>
            </Link>

            <div
              className="list_item_11"
              onClick={() => {
                navigate("/account");
              }}
            >
              <p>Account</p>
            </div>
          </ul>
        </div>
      </div>

      <div className="proff">
        <div className="container_acc">
          <div className="container_acc_l">
            {/*  ////////////////////////////// */}
            <div className="container_acc_l_logo">
              <div className="form-controll">
                <input
                  type="file"
                  onChange={() => {
                    setbool(!bool);
                  }}
                  name="file_up"
                />
              </div>
              <img
                ref={hiddenFileInput}
                src={host + data_profile.profile_picture}
                alt={host + data_profile.profile_picture}
              />

              {/* <input type="file" onClick={uploadImage} />



            <img src={host+data_profile.profile_picture}/> */}
            </div>

            {/* //////////////////////////////////////////////////// */}

            <div className="container_acc_l_info">
              <div className="profile_info_sta">
                <h1 className="nom">
                  {data_profile.family_name} {data_profile.first_name}
                </h1>
                <h6 className="bioo">{data_profile.bio}</h6>
              </div>
              <div className="profile_info_det">
                <div className="profile_info_det_div">
                  <LocationOnIcon className="icon"></LocationOnIcon>
                  <p>{data_profile.full_adress}</p>
                </div>
                <div className="profile_info_det_div">
                  <AlternateEmailIcon className="icon"></AlternateEmailIcon>
                  <p>{data_profile.email}</p>
                </div>
                <div className="profile_info_det_div">
                  <PhoneIcon className="icon"></PhoneIcon>
                  <p>{data_profile.phone_number}</p>
                </div>
                <div className="profile_info_det_div">
                  <LinkedInIcon className="icon"></LinkedInIcon>
                  <p>{data_profile.linked_in_username}</p>
                </div>
                <div className="profile_info_det_div">
                  <LogoutIcon className="icon"></LogoutIcon>
                  <p>Logout</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container_acc_r">
            <div className="bloc-tabs">
              <div
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                My Articles
              </div>
              <div
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Conferences
              </div>
              <div
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                waiting for review
              </div>
            </div>
            <div className="content-tabs">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }
              >
                <Getartcl data={article} />
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                <Getconfs data={confs} />
              </div>

              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }
              >
                <Getwait data={waiting} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
