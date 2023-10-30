import TeacherImg from "../assets/images/teacher.png";
import { useState, useEffect } from "react";

import styles from "./Home.style.module.css";
import {
  BiRadioCircle,
} from "react-icons/bi";
import {
  HiOutlineDotsVertical,
} from "react-icons/hi";
import { all_teachers } from "../Request";

export default function TeachersList() {

  const [teachers, setTeachers] = useState<any>([]);

  const fetchData = async () => {

    const own_subjet: any = await all_teachers();
    localStorage.setItem("all_teachers" , JSON.stringify(own_subjet)  )
  };

  useEffect(() => {
    all_teachers().then((response) => {
      setTeachers(response.data.data);
    });

    fetchData()
  }, []);
  return (
    <div>
      <div className="content">
      <div className="dashboard-section">
        <section className="np-breadcumb-section pt-5">
          <div className="container">
    <h1>শিক্ষকের তালিকা</h1>
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
                </div>
                </section>
                </div>
                </div>
  </div>
  )
}
