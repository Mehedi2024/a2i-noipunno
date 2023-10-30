import React from "react";
import TeacherImg from "../assets/images/teacher.png";
import { useState, useEffect } from "react";

import styles from "./Home.style.module.css";
import { FiStar, FiTriangle } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { PiBookOpenText } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import {
  BiSidebar,
  BiFilterAlt,
  BiSquareRounded,
  BiCircle,
  BiRadioCircle,
} from "react-icons/bi";
import { BsCloudSun, BsMoon } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
import {
  MdArrowBackIosNew,
  MdOutlineArrowForwardIos,
  MdOutlineKeyboardArrowRight,
  MdArrowForwardIos,
} from "react-icons/md";
import {
  HiOutlineSun,
  HiOutlineDotsVertical,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";
import ProfileCard from "./ProfileCard";
import { all_teachers, teacher_own_subject } from "../Request";

export default function Home() {
  const [teachers, setTeachers] = useState<any>([]);

  const fetchData = async () => {
    const own_subjet: any = await teacher_own_subject();
    localStorage.setItem("own_subjet", JSON.stringify(own_subjet));
  };

  useEffect(() => {
    all_teachers().then((response) => {
      setTeachers(response.data.data);
    });

    fetchData();
  }, []);

  return (
    <div className="content">
      <div className="dashboard-section">
        <section className="np-breadcumb-section pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <ProfileCard />
              </div>
              <div className="col-md-9">
                <div className="row d-flex gap-2">
                  <div></div>
                  <div className="d-flex">
                    <h5>
                      <BiSidebar /> বিষয়সমূহ
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-sm-4 col-md-4 col-lg-3">
                    <div className="card shadow-lg border-0 p-1 my-3 teacher-list-card">
                      <div className="gap-1 gap-lg-3 justify-content-center">
                        <div className="d-flex justify-content-center py-2 pb-4">
                          <div
                            className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                          >
                            <div className={styles.icons}>
                              <SlBookOpen className="fs-3" />
                            </div>
                          </div>
                        </div>
                        <h5 className={styles.subject}>বাংলা</h5>
                        <h5 className={styles.std_class}>ষষ্ঠ শ্রেণি</h5>
                        <h5 className={styles.class_teacher}>
                          শ্রেণি শিক্ষক : <span> শওকত আলী</span>
                        </h5>
                      </div>
                      <div className="flex-md-row flex-lg-row d-flex  justify-content-center gap-2">
                        <h6 className={styles.session}>প্রভাতি সেশন</h6>
                        <h6 className={styles.horizontal_bar}>। </h6>
                        <h6 className={styles.branch}>পদ্মা শাথা</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-3">
                    <div className="card shadow-lg border-0 p-1 my-3 teacher-list-card">
                      <div className="gap-1 gap-lg-3 justify-content-center">
                        <div className="d-flex justify-content-center py-2 pb-4">
                          <div
                            className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                          >
                            <div className={styles.icons}>
                              <SlBookOpen className="fs-3" />
                            </div>
                          </div>
                        </div>
                        <h5 className={styles.subject}>বাংলা</h5>
                        <h5 className={styles.std_class}>ষষ্ঠ শ্রেণি</h5>
                        <h5 className={styles.class_teacher}>
                          শ্রেণি শিক্ষক : <span> শওকত আলী</span>
                        </h5>
                      </div>
                      <div className="flex-md-row flex-lg-row d-flex  justify-content-center gap-2">
                        <h6 className={styles.session}>প্রভাতি সেশন</h6>
                        <h6 className={styles.horizontal_bar}>। </h6>
                        <h6 className={styles.branch}>পদ্মা শাথা</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-3">
                    <div className="card shadow-lg border-0 p-1 my-3 teacher-list-card">
                      <div className="gap-1 gap-lg-3 justify-content-center">
                        <div className="d-flex justify-content-center py-2 pb-4">
                          <div
                            className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                          >
                            <div className={styles.icons}>
                              <SlBookOpen className="fs-3" />
                            </div>
                          </div>
                        </div>
                        <h5 className={styles.subject}>বাংলা</h5>
                        <h5 className={styles.std_class}>ষষ্ঠ শ্রেণি</h5>
                        <h5 className={styles.class_teacher}>
                          শ্রেণি শিক্ষক : <span> শওকত আলী</span>
                        </h5>
                      </div>
                      <div className="flex-md-row flex-lg-row d-flex  justify-content-center gap-2">
                        <h6 className={styles.session}>প্রভাতি সেশন</h6>
                        <h6 className={styles.horizontal_bar}>। </h6>
                        <h6 className={styles.branch}>পদ্মা শাথা</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-3">
                    <div className="card shadow-lg border-0 p-1 my-3 teacher-list-card">
                      <div className="gap-1 gap-lg-3 justify-content-center">
                        <div className="d-flex justify-content-center py-2 pb-4">
                          <div
                            className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                          >
                            <div className={styles.icons}>
                              <SlBookOpen className="fs-3" />
                            </div>
                          </div>
                        </div>
                        <h5 className={styles.subject}>বাংলা</h5>
                        <h5 className={styles.std_class}>ষষ্ঠ শ্রেণি</h5>
                        <h5 className={styles.class_teacher}>
                          শ্রেণি শিক্ষক : <span> শওকত আলী</span>
                        </h5>
                      </div>
                      <div className="flex-md-row flex-lg-row d-flex  justify-content-center gap-2">
                        <h6 className={styles.session}>প্রভাতি সেশন</h6>
                        <h6 className={styles.horizontal_bar}>। </h6>
                        <h6 className={styles.branch}>পদ্মা শাথা</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-3">
                    <div className="card shadow-lg border-0 p-1 my-3 teacher-list-card">
                      <div className="gap-1 gap-lg-3 justify-content-center">
                        <div className="d-flex justify-content-center py-2 pb-4">
                          <div
                            className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                          >
                            <div className={styles.icons}>
                              <SlBookOpen className="fs-3" />
                            </div>
                          </div>
                        </div>
                        <h5 className={styles.subject}>বাংলা</h5>
                        <h5 className={styles.std_class}>ষষ্ঠ শ্রেণি</h5>
                        <h5 className={styles.class_teacher}>
                          শ্রেণি শিক্ষক : <span> শওকত আলী</span>
                        </h5>
                      </div>
                      <div className="flex-md-row flex-lg-row d-flex  justify-content-center gap-2">
                        <h6 className={styles.session}>প্রভাতি সেশন</h6>
                        <h6 className={styles.horizontal_bar}>। </h6>
                        <h6 className={styles.branch}>পদ্মা শাথা</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-3">
                    <div className="card shadow-lg border-0 p-1 my-3 teacher-list-card">
                      <div className="gap-1 gap-lg-3 justify-content-center">
                        <div className="d-flex justify-content-center py-2 pb-4">
                          <div
                            className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                          >
                            <div className={styles.icons}>
                              <SlBookOpen className="fs-3" />
                            </div>
                          </div>
                        </div>
                        <h5 className={styles.subject}>বাংলা</h5>
                        <h5 className={styles.std_class}>ষষ্ঠ শ্রেণি</h5>
                        <h5 className={styles.class_teacher}>
                          শ্রেণি শিক্ষক : <span> শওকত আলী</span>
                        </h5>
                      </div>
                      <div className="flex-md-row flex-lg-row d-flex  justify-content-center gap-2">
                        <h6 className={styles.session}>প্রভাতি সেশন</h6>
                        <h6 className={styles.horizontal_bar}>। </h6>
                        <h6 className={styles.branch}>পদ্মা শাথা</h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="row" style={{ rowGap: 10 }}>
                  <div className="col-md-6">
                    <a
                      href="https://teacher.project-ca.com/teachers"
                      style={{ textDecoration: "unset" }}
                    >
                      <div className="card np-card">
                        <div
                          className="card-body"
                          style={{ textAlign: "center" }}
                        >
                          <h2
                            style={{
                              margin: 0,
                              fontSize: 18,
                              color: "rgba(45, 102, 104, 1)",
                            }}
                          >
                            শিক্ষক যোগ করুন
                          </h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href="https://teacher.project-ca.com/noipunno-dashboard/branch-add"
                      style={{ textDecoration: "unset" }}
                    >
                      <div className="card np-card">
                        <div
                          className="card-body"
                          style={{ textAlign: "center" }}
                        >
                          <h2
                            style={{
                              margin: 0,
                              fontSize: 18,
                              color: "rgba(45, 102, 104, 1)",
                            }}
                          >
                            ব্রাঞ্চ যোগ করুন
                          </h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href="https://teacher.project-ca.com/noipunno-dashboard/version-add"
                      style={{ textDecoration: "unset" }}
                    >
                      <div className="card np-card">
                        <div
                          className="card-body"
                          style={{ textAlign: "center" }}
                        >
                          <h2
                            style={{
                              margin: 0,
                              fontSize: 18,
                              color: "rgba(45, 102, 104, 1)",
                            }}
                          >
                            ভার্সন যোগ করুন
                          </h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href="https://teacher.project-ca.com/students"
                      style={{ textDecoration: "unset" }}
                    >
                      <div className="card np-card">
                        <div
                          className="card-body"
                          style={{ textAlign: "center" }}
                        >
                          <h2
                            style={{
                              margin: 0,
                              fontSize: 18,
                              color: "rgba(45, 102, 104, 1)",
                            }}
                          >
                            শিক্ষার্থী যোগ করুন
                          </h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href="https://teacher.project-ca.com/noipunno-dashboard/shift-add"
                      style={{ textDecoration: "unset" }}
                    >
                      <div className="card np-card">
                        <div
                          className="card-body"
                          style={{ textAlign: "center" }}
                        >
                          <h2
                            style={{
                              margin: 0,
                              fontSize: 18,
                              color: "rgba(45, 102, 104, 1)",
                            }}
                          >
                            শিফট যোগ করুন
                          </h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href="https://teacher.project-ca.com/noipunno-dashboard/section-add"
                      style={{ textDecoration: "unset" }}
                    >
                      <div className="card np-card">
                        <div
                          className="card-body"
                          style={{ textAlign: "center" }}
                        >
                          <h2
                            style={{
                              margin: 0,
                              fontSize: 18,
                              color: "rgba(45, 102, 104, 1)",
                            }}
                          >
                            সেকশন যোগ করুন
                          </h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-12">
                    <a
                      href="https://teacher.project-ca.com/noipunno-dashboard/classroom-add"
                      style={{ textDecoration: "unset" }}
                    >
                      <div className="card np-card">
                        <div
                          className="card-body"
                          style={{ textAlign: "center" }}
                        >
                          <h2
                            style={{
                              margin: 0,
                              fontSize: 18,
                              color: "rgba(45, 102, 104, 1)",
                            }}
                          >
                            শাখা যোগ করুন
                          </h2>
                        </div>
                      </div>
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            {/* Teachers List start */}

            {/* Teachers List end */}
            {/* Class Six subject start */}
            <div className="row">
              <h5>ষষ্ঠ শ্রেণি বিষয়</h5>
              <ul className="nav d-flex justify-content-around bg-white py-1 rounded">
                <li className="nav-item">
                  <a
                    className="nav-link link-secondary active"
                    id="provati-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#provati"
                    href="#"
                  >
                    <BsCloudSun /> প্রভাতি
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link-secondary"
                    id="deba_session-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#deba_session"
                    href="#"
                  >
                    <HiOutlineSun /> দিবা সেশন
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link-secondary"
                    id="sondha_session-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#sondha_session"
                    href="#"
                  >
                    <BsMoon /> সন্ধা সেশন
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="tabContent">
                <div
                  className="tab-pane fade show active"
                  id="provati"
                  role="tabpanel"
                  aria-labelledby="provati-tab"
                >
                  <div className="row">
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="deba_session"
                  role="tabpanel"
                  aria-labelledby="deba_session-tab"
                >
                  <div className="row">
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="sondha_session"
                  role="tabpanel"
                  aria-labelledby="sondha_session-tab"
                >
                  <div className="row">
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Class Six subject end */}
            {/* teacher info start */}
            <div className="py-2">
              <div className="d-flex align-items-center py-2 gap-2">
                <div className="card shadow-lg border-0 p-2">
                  <MdArrowBackIosNew className="fs-1" />
                </div>
                <div className="card shadow-lg border-0 p-1 w-100">
                  <div className="d-flex justify-content-between">
                    <div>
                      <div style={{ fontSize: "14px" }}>
                        <BiSidebar
                          className={`fs-3 ${styles.teacher_info_list}`}
                        />{" "}
                        শিক্ষকের তালিকা
                      </div>
                      <div style={{ marginLeft: "2rem" }}>
                        <h6 style={{ color: "#C8DFDF", fontSize: "10px" }}>
                          {" "}
                          <AiOutlineHome />
                          Dashboard{" "}
                          <span style={{ color: "#000" }}>
                            {" "}
                            <MdOutlineArrowForwardIos />
                            Data
                          </span>
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center fs-4">
                      <FiStar /> <HiOutlineDotsVertical />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="row">
                  {teachers.map((teacher, index) => (
                    <div className="col-sm-6 col-md-4 my-2">
                      <div key={index} className="card shadow-lg border-0">
                        <div className="d-flex justify-content-between gap-3 border-bottom">
                          <div className="d-flex gap-3 align-items-center p-2">
                            <div>
                              <img
                                src={TeacherImg}
                                className="img-fluid"
                                style={{ height: "50px" }}
                              />
                            </div>
                            <div className="mt-2">
                              <h5 className={styles.teacherName}>
                                {teacher.name_en}
                              </h5>
                              <h6 className={styles.deg}>{teacher.position}</h6>
                            </div>
                          </div>
                          <div className="p-1">
                            <HiOutlineDotsVertical
                              className={`fs-4 ${styles.OutlineDotsVertical}`}
                            />
                          </div>
                        </div>
                        <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-1 p-2 mb-2">
                          <div className={styles.cardDesc}>বাংলা</div>
                          <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                          <div className={styles.cardDesc}>বিজ্ঞান</div>
                        </div>
                        <div className="">
                          <div
                            className="d-flex"
                            style={{ marginLeft: "-1.5rem" }}
                          >
                            {/* {teachers.map((teacher) => (
                          <div key={teacher.id}>
                            <h5 className={styles.teacherName}>{teacher.name}</h5>
                            <h6 className={styles.deg}>{teacher.position}</h6>
                          </div>))} */}
                            <ul className={`${styles.teacher_info_list_group}`}>
                              <li>
                                {" "}
                                <BiRadioCircle />
                                মোবাইল :
                              </li>
                            </ul>
                            <ul className={`${styles.teacher_info_list_group}`}>
                              <li> {teacher.mobile_no}</li>
                            </ul>
                          </div>
                          <div
                            className="d-flex"
                            style={{ marginLeft: "-1.5rem" }}
                          >
                            <ul className={`${styles.teacher_info_list_group}`}>
                              <li>
                                <BiRadioCircle /> জন্ম তারিখ :
                              </li>
                            </ul>
                            <ul className={`${styles.teacher_info_list_group}`}>
                              <li> ১২/১০/১৯৭৭</li>
                            </ul>
                          </div>
                          <div
                            className="d-flex"
                            style={{ marginLeft: "-1.5rem" }}
                          >
                            <ul className={`${styles.teacher_info_list_group}`}>
                              <li>
                                <BiRadioCircle /> লিঙ্গ :
                              </li>
                            </ul>
                            <ul className={`${styles.teacher_info_list_group}`}>
                              <li> মহিলা</li>
                            </ul>
                          </div>
                          <div
                            className="d-flex"
                            style={{ marginLeft: "-1.5rem" }}
                          >
                            <ul className={`${styles.teacher_info_list_group}`}>
                              <li>
                                <BiRadioCircle /> জাতীয়তা :
                              </li>
                            </ul>
                            <ul className={`${styles.teacher_info_list_group}`}>
                              <li> বাংলাদেশী</li>
                            </ul>
                          </div>
                          <div
                            className="d-flex"
                            style={{ marginLeft: "-1.5rem" }}
                          >
                            <ul className={`${styles.teacher_info_list_group}`}>
                              <li>
                                <BiRadioCircle />
                                ধর্ম :
                              </li>
                            </ul>
                            <ul className={`${styles.teacher_info_list_group}`}>
                              <li> ইসলাম</li>
                            </ul>
                          </div>
                          <div
                            className="d-flex"
                            style={{ marginLeft: "-1.5rem" }}
                          >
                            <ul className={`${styles.teacher_info_list_group}`}>
                              <li>
                                <BiRadioCircle />
                                বৈবাহিক অবস্থা :
                              </li>
                            </ul>
                            <ul className={`${styles.teacher_info_list_group}`}>
                              <li> বিবাহিতা</li>
                            </ul>
                          </div>
                          <div
                            className="d-flex"
                            style={{ marginLeft: "-1.5rem" }}
                          >
                            <ul className={`${styles.teacher_info_list_group}`}>
                              <li>
                                <BiRadioCircle />
                                এনআইডি নম্বর :
                              </li>
                            </ul>
                            <ul className={`${styles.teacher_info_list_group}`}>
                              <li> xxx-xxxxxxxxx</li>
                            </ul>
                          </div>
                          <div
                            className="d-flex"
                            style={{ marginLeft: "-1.5rem" }}
                          >
                            <ul className={`${styles.teacher_info_list_group}`}>
                              <li>
                                <BiRadioCircle />
                                পদবি :
                              </li>
                            </ul>
                            <ul className={`${styles.teacher_info_list_group}`}>
                              <li> সহকারী শিক্ষক</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div className="col-sm-6 col-md-4">
                  <div className="card shadow-lg border-0">
                    <div className="d-flex justify-content-between gap-3 border-bottom">
                      <div className="d-flex gap-3 align-items-center p-2">
                        <div>
                          <img
                            src={TeacherImg}
                            className="img-fluid"
                            style={{ height: "50px" }}
                          />
                        </div>
                        <div className="mt-2">
                          <h5 className={styles.teacherName}>Showkat Ali</h5>
                          <h6 className={styles.deg}>Head Master</h6>
                        </div>
                      </div>
                      <div className="p-1">
                        <HiOutlineDotsVertical
                          className={`fs-4 ${styles.OutlineDotsVertical}`}
                        />
                      </div>
                    </div>
                    <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-1 p-2 mb-2">
                      <div className={styles.cardDesc}>বাংলা</div>
                      <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                      <div className={styles.cardDesc}>বিজ্ঞান</div>
                    </div>
                    <div className="">
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            {" "}
                            <BiRadioCircle />
                            মোবাইল :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> ০১xxxxxxxxx</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle /> জন্ম তারিখ :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> ১২/১০/১৯৭৭</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle /> লিঙ্গ :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> মহিলা</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle /> জাতীয়তা :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> বাংলাদেশী</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle />
                            ধর্ম :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> ইসলাম</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle />
                            বৈবাহিক অবস্থা :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> বিবাহিতা</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle />
                            এনআইডি নম্বর :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> xxx-xxxxxxxxx</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle />
                            পদবি :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> সহকারী শিক্ষক</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="card shadow-lg border-0">
                    <div className="d-flex justify-content-between gap-3 border-bottom">
                      <div className="d-flex gap-3 align-items-center p-2">
                        <div>
                          <img
                            src={TeacherImg}
                            className="img-fluid"
                            style={{ height: "50px" }}
                          />
                        </div>
                        <div className="mt-2">
                          <h5 className={styles.teacherName}>Showkat Ali</h5>
                          <h6 className={styles.deg}>Head Master</h6>
                        </div>
                      </div>
                      <div className="p-1">
                        <HiOutlineDotsVertical
                          className={`fs-4 ${styles.OutlineDotsVertical}`}
                        />
                      </div>
                    </div>
                    <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-1 p-2 mb-2">
                      <div className={styles.cardDesc}>বাংলা</div>
                      <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                      <div className={styles.cardDesc}>বিজ্ঞান</div>
                    </div>
                    <div className="">
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            {" "}
                            <BiRadioCircle />
                            মোবাইল :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> ০১xxxxxxxxx</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle /> জন্ম তারিখ :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> ১২/১০/১৯৭৭</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle /> লিঙ্গ :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> মহিলা</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle /> জাতীয়তা :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> বাংলাদেশী</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle />
                            ধর্ম :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> ইসলাম</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle />
                            বৈবাহিক অবস্থা :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> বিবাহিতা</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle />
                            এনআইডি নম্বর :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> xxx-xxxxxxxxx</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle />
                            পদবি :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> সহকারী শিক্ষক</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* teacher info end */}
            {/* report start */}
            <div className="row py-5">
              <div className="d-flex align-items-center py-2 gap-2">
                <div className="card shadow-lg border-0 p-2">
                  <MdArrowBackIosNew className="fs-1" />
                </div>
                <div className="card shadow-lg border-0 p-1 w-100">
                  <div className="d-flex justify-content-between">
                    <div>
                      <div style={{ fontSize: "14px" }}>
                        <BiSidebar
                          className={`fs-3 ${styles.teacher_info_list}`}
                        />{" "}
                        মূল্যায়ন প্রতিবেদন
                      </div>
                      <div style={{ marginLeft: "2rem" }}>
                        <h6 style={{ color: "#C8DFDF", fontSize: "10px" }}>
                          {" "}
                          <AiOutlineHome />
                          Dashboard{" "}
                          <span style={{ color: "#000" }}>
                            {" "}
                            <MdOutlineArrowForwardIos />
                            Data
                          </span>
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center fs-4">
                      <FiStar /> <HiOutlineDotsVertical />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="card shadow-lg border-0 w-100 rounded">
                  <ul className="nav d-flex mt-2 justify-content-around py-1">
                    <li className={`nav-item`}>
                      <a
                        className={`nav-link link-secondary ${styles.nav_tab_bottom_border} active`}
                        id="expertness-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#expertness"
                        href="#"
                      >
                        <SlBookOpen className="me-1" /> পারদর্শিতার মূল্যায়ন
                        প্রতিবেদন(PI)
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link link-secondary ${styles.nav_tab_bottom_border}`}
                        id="behaviour-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#behaviour"
                        href="#"
                      >
                        <SlBookOpen className="me-1" /> আচরণগত মূল্যায়ন
                        প্রতিবেদন(BI)
                      </a>
                    </li>
                  </ul>
                  <div
                    className="tab-content"
                    id="tabContent"
                    style={{ backgroundColor: "#E4FEFF" }}
                  >
                    <div
                      className="tab-pane fade show active"
                      id="expertness"
                      role="tabpanel"
                      aria-labelledby="expertness-tab"
                    >
                      <div className="row p-5">
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              শ্রেণী নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>শ্রেণী নির্বাচন করুন</option>
                              <option value="1">ষষ্ঠ শ্রেণী</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              সেশন নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected> সেশন নির্বাচন করুন</option>
                              <option value="1">প্রভাতি সেশন</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              শাখা নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected> শাখা নির্বাচন করুন</option>
                              <option value="1">পদ্মা শাখা</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              বিষয় নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>বিষয় নির্বাচন করুন</option>
                              <option value="1">সবগুলি</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              মূল্যায়ন শিরোনাম নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>
                                {" "}
                                মূল্যায়ন শিরোনাম নির্বাচন করুন
                              </option>
                              <option value="1">শিখন কালীন মূল্যায়ন</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              যোগ্যতা নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>যোগ্যতা নির্বাচন করুন</option>
                              <option value="1">সকল যোগ্যতা</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              পারদর্শিকতার সূচক নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>
                                পারদর্শিকতার সূচক নির্বাচন করুন
                              </option>
                              <option value="1">সকল সূচক</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3">
                            <label className="form-label mt-3"></label>
                            <div className="input-group">
                              <input
                                className="form-control py-1 border-right-0 border-0"
                                type="search"
                                defaultValue="নিম্নে মূল্যায়ন প্রতিবেদন দেখুন"
                                id="example-search-input"
                                style={{
                                  fontSize: "12px",
                                  backgroundColor: "#428F92",
                                }}
                              />
                              <span
                                className="input-group-append rounded-end"
                                style={{
                                  fontSize: "12px",
                                  backgroundColor: "#428F92",
                                }}
                              >
                                <button
                                  className="btn btn-outline-secondary py-1 border-0"
                                  type="button"
                                  style={{
                                    backgroundColor: "#428F92",
                                  }}
                                >
                                  <i className="fa fa-search" />
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="behaviour"
                      role="tabpanel"
                      aria-labelledby="behaviour-tab"
                    >
                      <div className="row p-5">
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              শ্রেণী নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>শ্রেণী নির্বাচন করুন</option>
                              <option value="1">ষষ্ঠ শ্রেণী</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              সেশন নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected> সেশন নির্বাচন করুন</option>
                              <option value="1">প্রভাতি সেশন</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              শাখা নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected> শাখা নির্বাচন করুন</option>
                              <option value="1">পদ্মা শাখা</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              বিষয় নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>বিষয় নির্বাচন করুন</option>
                              <option value="1">সবগুলি</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              মূল্যায়ন শিরোনাম নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>
                                {" "}
                                মূল্যায়ন শিরোনাম নির্বাচন করুন
                              </option>
                              <option value="1">শিখন কালীন মূল্যায়ন</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              যোগ্যতা নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>যোগ্যতা নির্বাচন করুন</option>
                              <option value="1">সকল যোগ্যতা</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              পারদর্শিকতার সূচক নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>
                                পারদর্শিকতার সূচক নির্বাচন করুন
                              </option>
                              <option value="1">সকল সূচক</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3">
                            <label className="form-label mt-3"></label>
                            <div className="input-group">
                              <input
                                className="form-control py-1 border-right-0 border-0"
                                type="search"
                                defaultValue="নিম্নে মূল্যায়ন প্রতিবেদন দেখুন"
                                id="example-search-input"
                                style={{
                                  fontSize: "12px",
                                  backgroundColor: "#428F92",
                                }}
                              />
                              <span
                                className="input-group-append rounded-end"
                                style={{
                                  fontSize: "12px",
                                  backgroundColor: "#428F92",
                                }}
                              >
                                <button
                                  className="btn btn-outline-secondary py-1 border-0"
                                  type="button"
                                  style={{
                                    backgroundColor: "#428F92",
                                  }}
                                >
                                  <i className="fa fa-search" />
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* report end */}
            {/* expertness assessment start */}
            <div className="row py-5">
              <div className="d-flex align-items-center py-2 gap-2">
                <div className="card shadow-lg border-0 p-2">
                  <MdArrowBackIosNew className="fs-1" />
                </div>
                <div className="card shadow-lg border-0 p-1 w-100">
                  <div className="d-flex justify-content-between">
                    <div>
                      <div style={{ fontSize: "14px" }}>
                        <BiSidebar
                          className={`fs-3 ${styles.teacher_info_list}`}
                        />{" "}
                        পারদর্শিতার মূল্যায়ন
                      </div>
                      <div style={{ marginLeft: "2rem" }}>
                        <h6 style={{ color: "#C8DFDF", fontSize: "10px" }}>
                          {" "}
                          <AiOutlineHome />
                          Dashboard{" "}
                          <span style={{ color: "#000" }}>
                            {" "}
                            <MdOutlineArrowForwardIos />
                            Data
                          </span>
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center fs-4">
                      <FiStar /> <HiOutlineDotsVertical />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="card shadow-lg border-0 w-100 rounded">
                  <ul className="nav d-flex mt-2 justify-content-around py-1">
                    <li className={`nav-item`}>
                      <a
                        className={`nav-link link-secondary ${styles.nav_tab_bottom_border} active`}
                        id="expertness_assessment-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#expertness_assessment"
                        href="#"
                      >
                        <SlBookOpen className="me-1" /> পারদর্শিতার মূল্যায়ন
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link link-secondary ${styles.nav_tab_bottom_border}`}
                        id="behaviour_assessment-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#behaviour_assessment"
                        href="#"
                      >
                        <SlBookOpen className="me-1" /> আচরণগত মূল্যায়ন
                      </a>
                    </li>
                  </ul>
                  <div
                    className="tab-content"
                    id="tabContent"
                    style={{ backgroundColor: "#E4FEFF" }}
                  >
                    <div
                      className="tab-pane fade show active"
                      id="expertness_assessment"
                      role="tabpanel"
                      aria-labelledby="expertness_assessment-tab"
                    >
                      <div className="row p-5">
                        <div className="col-sm-6 col-md-4">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              মূল্যায়ন শিরোনাম নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>
                                মূল্যায়ন শিরোনাম নির্বাচন করুন
                              </option>
                              <option value="1">শিখনকালীন মূল্যায়ন</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              শিক্ষার্থী নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>
                                {" "}
                                শিক্ষার্থী নির্বাচন করুন
                              </option>
                              <option value="1">ইনতিশার পারভেজ - ৩২১০০</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              অধ্যায় নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>অধ্যায় নির্বাচন করুন </option>
                              <option value="1">অধ্যায় ১</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              যোগ্যতা নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>যোগ্যতা নির্বাচন করুন </option>
                              <option value="1">
                                ৬.১ পরিবেশ - পরিস্থিতিকে বিবেচনায় নিয়ে ব্যক্তির
                                আগ্রহ-চাহিদা অনুযায়ী মর্যাদা বজায় রেখে যোগাযোগ
                                করতে পারা।
                              </option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              পারদর্শিতা সূচক
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected> পারদর্শিতা সূচক</option>
                              <option value="1">
                                ৬.১.১ নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায়
                                নিয়ে যোগাযোগ করতে পারছে।
                              </option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end align-items-center pt-5 pe-5">
                          <button
                            type="button"
                            className="btn btn-primay px-5"
                            style={{
                              backgroundColor: "#428F92",
                              color: "#fff",
                            }}
                          >
                            মূল্যায়ন শুরু করুন{" "}
                            <MdOutlineKeyboardArrowRight
                              className="fs-3"
                              style={{
                                marginTop: "-0.3rem",
                              }}
                            />{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="behaviour_assessment"
                      role="tabpanel"
                      aria-labelledby="behaviour_assessment-tab"
                    >
                      <div className="row p-5">
                        <div className="col-sm-6 col-md-4">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              মূল্যায়ন শিরোনাম নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>
                                মূল্যায়ন শিরোনাম নির্বাচন করুন
                              </option>
                              <option value="1">শিখনকালীন মূল্যায়ন</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              শিক্ষার্থী নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>
                                {" "}
                                শিক্ষার্থী নির্বাচন করুন
                              </option>
                              <option value="1">ইনতিশার পারভেজ - ৩২১০০</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              অধ্যায় নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>অধ্যায় নির্বাচন করুন </option>
                              <option value="1">অধ্যায় ১</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              যোগ্যতা নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>যোগ্যতা নির্বাচন করুন </option>
                              <option value="1">
                                ৬.১ পরিবেশ - পরিস্থিতিকে বিবেচনায় নিয়ে ব্যক্তির
                                আগ্রহ-চাহিদা অনুযায়ী মর্যাদা বজায় রেখে যোগাযোগ
                                করতে পারা।
                              </option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              পারদর্শিতা সূচক
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected> পারদর্শিতা সূচক</option>
                              <option value="1">
                                ৬.১.১ নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায়
                                নিয়ে যোগাযোগ করতে পারছে।
                              </option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end align-items-center pt-5 pe-5">
                          <button
                            type="button"
                            className="btn btn-primay px-5"
                            style={{
                              backgroundColor: "#428F92",
                              color: "#fff",
                            }}
                          >
                            মূল্যায়ন শুরু করুন{" "}
                            <MdOutlineKeyboardArrowRight
                              className="fs-3"
                              style={{
                                marginTop: "-0.3rem",
                              }}
                            />{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* expertness assessment start */}
            {/* learing period assessment report start */}
            <div className="py-3">
              <div>
                <h4>শিখনকালীন মূল্যায়ন প্রতিবেদন (PI) </h4>
                <h5 className="fw-bold">পারদর্শিতা সূচক ৬.১.১ </h5>
                <h6>
                  নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে যোগাযোগ করতে
                  পারছে।
                </h6>
              </div>
              <div className="card shadow-lg p-3 mt-3">
                <div className="table-responsive">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th className={`${styles.table_1st_column_sticky}`}>
                          শিক্ষার্থীর <BiFilterAlt className="fs-5 ms-4" />
                        </th>
                        <th className={`${styles.table_2nd_column_sticky}`}>
                          শিক্ষার্থীর ID
                        </th>
                        <th style={{ minWidth: "330px" }}></th>
                        <th style={{ minWidth: "300px" }}>
                          <BiFilterAlt className="fs-5" />
                        </th>
                        <th style={{ minWidth: "380px" }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          className={`pt-3 ${styles.table_1st_column_sticky}`}
                        >
                          <GoPerson className="fs-6" /> ইনতিশার পারভেজ
                        </td>
                        <td
                          className={`pt-3 ${styles.table_2nd_column_sticky}`}
                        >
                          987654321
                        </td>
                        <td>
                          <div className="d-flex gap-2 align-items-center">
                            {" "}
                            <div
                              className=""
                              style={{
                                border: "1px solid #eee",
                                padding: "5px 6px",
                                borderRadius: "3px",
                                maxHeight: "40px",
                              }}
                            >
                              <BiSquareRounded className="fs-5 mt-1" />
                            </div>
                            <div>
                              অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ
                              করতে পারছে।
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex gap-2 align-items-center">
                            {" "}
                            <div
                              className=""
                              style={{
                                border: "1px solid #eee",
                                padding: "5px 6px",
                                borderRadius: "3px",
                                maxHeight: "40px",
                              }}
                            >
                              <BiCircle className="fs-5 mt-1" />
                            </div>
                            <div>
                              অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ
                              ব্যক্তির আগ্রহ, চাহিদা ও আবেগ বিবেচনায় নিতে পারছে।
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex gap-2 align-items-center">
                            {" "}
                            <div
                              className=""
                              style={{
                                border: "1px solid #eee",
                                padding: "5px 6px",
                                borderRadius: "3px",
                                maxHeight: "40px",
                              }}
                            >
                              <FiTriangle className="fs-5 mt-1" />
                            </div>
                            <div>
                              অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় পরিবেশ -
                              পরিস্থিতির ভিন্নতা অনুযায়ী ব্যক্তির আগ্রহ, চাহিদা
                              ও আবেগ বিবেচনায় নিয়ে যোগাযোগ করতে পারছে।
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className={`pt-3 ${styles.table_1st_column_sticky}`}
                        >
                          <GoPerson className="fs-6" /> ইনতিশার পারভেজ
                        </td>
                        <td
                          className={`pt-3 ${styles.table_2nd_column_sticky}`}
                        >
                          987654321
                        </td>
                        <td>
                          <div className="d-flex gap-2 align-items-center">
                            {" "}
                            <div
                              className=""
                              style={{
                                border: "1px solid #eee",
                                padding: "5px 6px",
                                borderRadius: "3px",
                                maxHeight: "40px",
                              }}
                            >
                              <BiSquareRounded className="fs-5 mt-1" />
                            </div>
                            <div>
                              অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ
                              করতে পারছে।
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex gap-2 align-items-center">
                            {" "}
                            <div
                              className=""
                              style={{
                                border: "1px solid #eee",
                                padding: "5px 6px",
                                borderRadius: "3px",
                                maxHeight: "40px",
                              }}
                            >
                              <BiCircle className="fs-5 mt-1" />
                            </div>
                            <div>
                              অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ
                              ব্যক্তির আগ্রহ, চাহিদা ও আবেগ বিবেচনায় নিতে পারছে।
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex gap-2 align-items-center">
                            {" "}
                            <div
                              className=""
                              style={{
                                border: "1px solid #eee",
                                padding: "5px 6px",
                                borderRadius: "3px",
                                maxHeight: "40px",
                              }}
                            >
                              <FiTriangle className="fs-5 mt-1" />
                            </div>
                            <div>
                              অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় পরিবেশ -
                              পরিস্থিতির ভিন্নতা অনুযায়ী ব্যক্তির আগ্রহ, চাহিদা
                              ও আবেগ বিবেচনায় নিয়ে যোগাযোগ করতে পারছে।
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className={`pt-3 ${styles.table_1st_column_sticky}`}
                        >
                          <GoPerson className="fs-6" /> ইনতিশার পারভেজ
                        </td>
                        <td
                          className={`pt-3 ${styles.table_2nd_column_sticky}`}
                        >
                          987654321
                        </td>
                        <td>
                          <div className="d-flex gap-2 align-items-center">
                            {" "}
                            <div
                              className=""
                              style={{
                                border: "1px solid #eee",
                                padding: "5px 6px",
                                borderRadius: "3px",
                                maxHeight: "40px",
                              }}
                            >
                              <BiSquareRounded className="fs-5 mt-1" />
                            </div>
                            <div>
                              অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ
                              করতে পারছে।
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex gap-2 align-items-center">
                            {" "}
                            <div
                              className=""
                              style={{
                                border: "1px solid #eee",
                                padding: "5px 6px",
                                borderRadius: "3px",
                                maxHeight: "40px",
                              }}
                            >
                              <BiCircle className="fs-5 mt-1" />
                            </div>
                            <div>
                              অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ
                              ব্যক্তির আগ্রহ, চাহিদা ও আবেগ বিবেচনায় নিতে পারছে।
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex gap-2 align-items-center">
                            {" "}
                            <div
                              className=""
                              style={{
                                border: "1px solid #eee",
                                padding: "5px 6px",
                                borderRadius: "3px",
                                maxHeight: "40px",
                              }}
                            >
                              <FiTriangle className="fs-5 mt-1" />
                            </div>
                            <div>
                              অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় পরিবেশ -
                              পরিস্থিতির ভিন্নতা অনুযায়ী ব্যক্তির আগ্রহ, চাহিদা
                              ও আবেগ বিবেচনায় নিয়ে যোগাযোগ করতে পারছে।
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className={`pt-3 ${styles.table_1st_column_sticky}`}
                        >
                          <GoPerson className="fs-6" /> ইনতিশার পারভেজ
                        </td>
                        <td
                          className={`pt-3 ${styles.table_2nd_column_sticky}`}
                        >
                          987654321
                        </td>
                        <td>
                          <div className="d-flex gap-2 align-items-center">
                            {" "}
                            <div
                              className=""
                              style={{
                                border: "1px solid #eee",
                                padding: "5px 6px",
                                borderRadius: "3px",
                                maxHeight: "40px",
                              }}
                            >
                              <BiSquareRounded className="fs-5 mt-1" />
                            </div>
                            <div>
                              অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ
                              করতে পারছে।
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex gap-2 align-items-center">
                            {" "}
                            <div
                              className=""
                              style={{
                                border: "1px solid #eee",
                                padding: "5px 6px",
                                borderRadius: "3px",
                                maxHeight: "40px",
                              }}
                            >
                              <BiCircle className="fs-5 mt-1" />
                            </div>
                            <div>
                              অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ
                              ব্যক্তির আগ্রহ, চাহিদা ও আবেগ বিবেচনায় নিতে পারছে।
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex gap-2 align-items-center">
                            {" "}
                            <div
                              className=""
                              style={{
                                border: "1px solid #eee",
                                padding: "5px 6px",
                                borderRadius: "3px",
                                maxHeight: "40px",
                              }}
                            >
                              <FiTriangle className="fs-5 mt-1" />
                            </div>
                            <div>
                              অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় পরিবেশ -
                              পরিস্থিতির ভিন্নতা অনুযায়ী ব্যক্তির আগ্রহ, চাহিদা
                              ও আবেগ বিবেচনায় নিয়ে যোগাযোগ করতে পারছে।
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className={`pt-3 ${styles.table_1st_column_sticky}`}
                        >
                          <GoPerson className="fs-6" /> ইনতিশার পারভেজ
                        </td>
                        <td
                          className={`pt-3 ${styles.table_2nd_column_sticky}`}
                        >
                          987654321
                        </td>
                        <td>
                          <div className="d-flex gap-2 align-items-center">
                            {" "}
                            <div
                              className=""
                              style={{
                                border: "1px solid #eee",
                                padding: "5px 6px",
                                borderRadius: "3px",
                                maxHeight: "40px",
                              }}
                            >
                              <BiSquareRounded className="fs-5 mt-1" />
                            </div>
                            <div>
                              অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ
                              করতে পারছে।
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex gap-2 align-items-center">
                            {" "}
                            <div
                              className=""
                              style={{
                                border: "1px solid #eee",
                                padding: "5px 6px",
                                borderRadius: "3px",
                                maxHeight: "40px",
                              }}
                            >
                              <BiCircle className="fs-5 mt-1" />
                            </div>
                            <div>
                              অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ
                              ব্যক্তির আগ্রহ, চাহিদা ও আবেগ বিবেচনায় নিতে পারছে।
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex gap-2 align-items-center">
                            {" "}
                            <div
                              className=""
                              style={{
                                border: "1px solid #eee",
                                padding: "5px 6px",
                                borderRadius: "3px",
                                maxHeight: "40px",
                              }}
                            >
                              <FiTriangle className="fs-5 mt-1" />
                            </div>
                            <div>
                              অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় পরিবেশ -
                              পরিস্থিতির ভিন্নতা অনুযায়ী ব্যক্তির আগ্রহ, চাহিদা
                              ও আবেগ বিবেচনায় নিয়ে যোগাযোগ করতে পারছে।
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-6 col-sm-6">
                  <div className="d-flex gap-2 align-items-center">
                    <div>
                      {" "}
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>select</option>
                        <option value="1">10</option>
                        <option value="2">20</option>
                        <option value="3">30</option>
                      </select>
                    </div>
                    <div className="">
                      {" "}
                      <p className="pt-3" style={{ fontSize: "14px" }}>
                        Rows Showing 1 to 10 of 100 entries
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="pt-3">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-end">
                        <li className="page-item">
                          <a
                            className={`page-link text-dark ${styles.page_link_hover} rounded`}
                            href="#"
                          >
                            <MdArrowBackIosNew />
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className={`page-link text-dark ${styles.page_link_hover} rounded`}
                            href="#"
                          >
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className={`page-link text-dark ${styles.page_link_hover} rounded`}
                            href="#"
                          >
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className={`page-link text-dark ${styles.page_link_hover} rounded`}
                            href="#"
                          >
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className={`page-link text-dark ${styles.page_link_hover} rounded`}
                            href="#"
                          >
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className={`page-link text-dark ${styles.page_link_hover} rounded`}
                            href="#"
                          >
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className={`page-link text-dark ${styles.page_link_hover} rounded`}
                            href="#"
                          >
                            4
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className={`page-link text-dark ${styles.page_link_hover} rounded`}
                            href="#"
                          >
                            7
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className={`page-link text-dark ${styles.page_link_hover} rounded`}
                            href="#"
                          >
                            <HiOutlineDotsHorizontal />
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className={`page-link text-dark ${styles.page_link_hover} rounded`}
                            href="#"
                          >
                            9
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className={`page-link text-dark ${styles.page_link_hover} rounded`}
                            href="#"
                          >
                            <MdArrowForwardIos />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className={`btn btn-primay py-2 ${styles.learning_period_assessment_btn_left}`}
                >
                  খসড়া সংরক্ষণ করুন{" "}
                  <MdOutlineKeyboardArrowRight
                    className="fs-3"
                    style={{
                      marginTop: "-0.3rem",
                    }}
                  />{" "}
                </button>
                <button
                  type="button"
                  className={`btn btn-primay py-2 ${styles.learning_period_assessment_btn_right}`}
                >
                  জমা দিন{" "}
                  <MdOutlineKeyboardArrowRight
                    className="fs-3"
                    style={{
                      marginTop: "-0.3rem",
                    }}
                  />{" "}
                </button>
              </div>
            </div>
            {/* learing period assessment report end */}
            {/* shikhon kalin mollaion start */}
            <div className="py-5">
              <h3
                className="text-center py-2 text-white"
                style={{ backgroundColor: "#428F92" }}
              >
                শিখনকালীন মূল্যায়ন / অধ্যায়
              </h3>
              <h5>অধ্যায় নির্বাচন করুন</h5>
              <div className="row">
                <div className="col-sm-6 col-md-4">
                  <div className={`d-flex align-items-center py-2 gap-2`}>
                    <div
                      className={`card shadow-lg border-0 p-1 w-100 ${styles.card_hover}`}
                    >
                      <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between align-items-center w-100 px-1">
                          <div className="py-2" style={{ color: "#428F92" }}>
                            <PiBookOpenText className="me-2" /> ১ মর্যাদা বজায়
                            রেখে যোগাযোগ করি
                          </div>
                          <div
                            className="px-2 rounded text-white"
                            style={{ backgroundColor: "#428F92" }}
                          >
                            1/3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className={`d-flex align-items-center py-2 gap-2`}>
                    <div
                      className={`card shadow-lg border-0 p-1 w-100 ${styles.card_hover}`}
                    >
                      <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between align-items-center w-100 px-1">
                          <div className="py-2" style={{ color: "#428F92" }}>
                            <PiBookOpenText className="me-2" /> ১ মর্যাদা বজায়
                            রেখে যোগাযোগ করি
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className={`d-flex align-items-center py-2 gap-2`}>
                    <div
                      className={`card shadow-lg border-0 p-1 w-100 ${styles.card_hover}`}
                    >
                      <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between align-items-center w-100 px-1">
                          <div className="py-2" style={{ color: "#428F92" }}>
                            <PiBookOpenText className="me-2" /> ২ প্রমিত ভাষা
                            শিখি
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className={`d-flex align-items-center py-2 gap-2`}>
                    <div
                      className={`card shadow-lg border-0 p-1 w-100 ${styles.card_hover}`}
                    >
                      <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between align-items-center w-100 px-1">
                          <div className="py-2" style={{ color: "#428F92" }}>
                            <PiBookOpenText className="me-2" /> ৩ অর্থ বুজে
                            বাক্য লিখি
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className={`d-flex align-items-center py-2 gap-2`}>
                    <div
                      className={`card shadow-lg border-0 p-1 w-100 ${styles.card_hover}`}
                    >
                      <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between align-items-center w-100 px-1">
                          <div className="py-2" style={{ color: "#428F92" }}>
                            <PiBookOpenText className="me-2" /> ৪ চারপাশের লেখার
                            সাথে পরিচিত হই
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className={`d-flex align-items-center py-2 gap-2`}>
                    <div
                      className={`card shadow-lg border-0 p-1 w-100 ${styles.card_hover}`}
                    >
                      <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between align-items-center w-100 px-1">
                          <div className="py-2" style={{ color: "#428F92" }}>
                            <PiBookOpenText className="me-2" /> ৫ বুজে পড়ি লিখতে
                            শিখি
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* shikhon kalin mollaion end */}
            {/* shikhon kalin mollaion odhai start */}
            <div className="py-5">
              <h3
                className="text-center py-2 text-white"
                style={{ backgroundColor: "#428F92" }}
              >
                শিখনকালীন মূল্যায়ন / অধ্যায় ১ / ৬.১
              </h3>
              <h5>পারদর্শিতার সূচক নির্বাচন করুন</h5>
              <div className="row">
                <div className="col-sm-6 col-md-12">
                  <div className={`d-flex align-items-center py-2 gap-2`}>
                    <div className={`border-0 p-1 w-100`}>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between align-items-center w-100 px-1">
                          <div className="py-2" style={{ color: "#428F92" }}>
                            {" "}
                            <h6>৬.১</h6>
                            <h6>
                              পরিবেশ পরিস্থিতিকে বিবেচনায় নিয়ে ব্যক্তির আগ্রহ
                              চাহিদা অনুযায়ী মর্যাদা বজায় রেখে যোগাযোগ করতে হবে
                              ।
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12">
                  <div className={`d-flex align-items-center py-2 gap-2`}>
                    <div
                      className={`card shadow-lg border-0 p-1 w-100 ${styles.card_hover}`}
                      style={{
                        backgroundColor: "#93F0F3",
                      }}
                    >
                      <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between align-items-center w-100 px-1">
                          <div className="py-2 ps-4">
                            <h6>৬.১</h6>
                            <h6 className="">
                              পরিবেশ পরিস্থিতিকে বিবেচনায় নিয়ে ব্যক্তির আগ্রহ
                              চাহিদা অনুযায়ী মর্যাদা বজায় রেখে যোগাযোগ করতে হবে
                              ।
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12">
                  <div className={`d-flex align-items-center py-2 gap-2`}>
                    <div
                      className={`card shadow-lg border-0 p-1 w-100 ${styles.card_hover}`}
                      style={{
                        backgroundColor: "#93F0F3",
                      }}
                    >
                      <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between align-items-center w-100 px-1">
                          <div className="py-2 ps-4">
                            <h6>৬.২</h6>
                            <h6>
                              পরিবেশ পরিস্থিতিকে বিবেচনায় নিয়ে ব্যক্তির আগ্রহ
                              চাহিদা অনুযায়ী মর্যাদা বজায় রেখে যোগাযোগ করতে হবে
                              ।
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* shikhon kalin mollaion odhai start */}
          </div>
        </section>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            .np-table th,\n            td {\n                font-size: 11px;\n            }\n        ",
        }}
      />

      {/* Teachers List end */}
    </div>
  );
}
