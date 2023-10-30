import React from "react";
import TeacherImg from "../assets/images/teacher.png";
import { FiStar, FiTriangle } from "react-icons/fi";
import { useState, useEffect } from "react";

import styles from "./Home.style.module.css";
import {
  BiCircle,
  BiFilterAlt,
  BiSidebar,
  BiSquareRounded,
} from "react-icons/bi";
import { BsCloudSun, BsMoon } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
import {
  HiOutlineSun,
  HiOutlineDotsVertical,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";
import ProfileCard from "./ProfileCard";
import { Pi_save, teacher_dashboard, teacher_own_subject } from "../Request";
import { useParams } from "react-router-dom";
import {
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { GoPerson } from "react-icons/go";

const own_SUbjects__: any = localStorage.getItem("own_subjet") || "";
const own_SUbjects = own_SUbjects__ ? JSON.parse(own_SUbjects__) : "";

export default function StudentMullayon() {
  const { assessment_uid }: any = useParams();
  const [Student, setStudent] = useState<any>([]);
  const [teacher, setteacher] = useState<any>({});
  const [individual_student, setindividual_student] = useState<any>({});
  const [StudentName, setStudentName] = useState<any>("");
  const [showToggle, setshowToggle] = useState<any>({});
  const [compitance, setcompitance] = useState<any>([]);

  const fetchData = async () => {
    let own_subjet: any = "";
    if (own_SUbjects) {
      own_subjet = own_SUbjects;
    } else {
      own_subjet = await teacher_own_subject();
      localStorage.setItem("own_subjet", JSON.stringify(own_subjet));
    }

    const student: any = [];
    own_subjet.data.data.subjects.map((std_data: any) => {
      return std_data.class_room.students.map((stu_data: any) => {
        stu_data.competence = std_data.competence;
        student.push(stu_data);
      });
    });

    const uniqueObjectsArray = student.filter(
      (obj: any, index: any, self: any) =>
        index === self.findIndex((o: any) => o.uid === obj.uid)
    );

    setStudent(uniqueObjectsArray);
    setteacher(own_subjet.data.data.user);
    localStorage.setItem("own_subjet", JSON.stringify(own_subjet));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showCompitance = (data: any) => {
    console.log(`data`, data);
    setindividual_student(data);
    setcompitance(data.competence);
    setStudentName(data.student_name_bn);
  };

  const save_PI_evalution = async (
    competence_uid: any,
    pi_uid: any,
    weight_uid: any
  ) => {

    try {

      let { data } = await Pi_save(
        assessment_uid,
        competence_uid,
        pi_uid,
        weight_uid,
        individual_student.uid,
        teacher.caid,
        2,
        1
      );
  
      if (data.status) {
        alert("Success")
      }
      
    } catch (error) {
      alert("SOmething went wrong")
    }

    
  };

  console.log(`Student`, Student);

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
                      <BiSidebar /> শিক্ষার্থী
                    </h5>
                  </div>
                </div>
                <div className="row">
                  {Student.map((teacher: any, k: any) => (
                    <div
                      className="col-sm-6 col-md-4 my-2"
                      key={k}
                      style={{ cursor: "pointer" }}
                      onClick={() => showCompitance(teacher)}
                    >
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
                              <h5 className={styles.teacherName}>
                                {teacher.student_name_bn}
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
                      </div>
                    </div>
                  ))}

                  {compitance.length > 0 && (
                    <>
                      {
                        <div className="py-5">
                          <h3
                            className="text-center py-2 text-white"
                            style={{ backgroundColor: "#428F92" }}
                          >
                            {StudentName}
                          </h3>
                          <div className="row">
                            {compitance.map((d: any, key: any) => (
                              <div
                                key={key}
                                style={{ cursor: "pointer" }}
                                className="col-12"
                              >
                                <div
                                  className={`d-flex align-items-center py-2 gap-2`}
                                  data-toggle="collapse"
                                  data-target={"#collapseExample" + key}
                                  aria-expanded="false"
                                  aria-controls={"collapseExample" + key}
                                  onClick={() =>
                                    setshowToggle({
                                      ...showToggle,
                                      [key]: showToggle[key]
                                        ? !showToggle[key]
                                        : true,
                                    })
                                  }
                                >
                                  <div
                                    className={`card shadow-lg border-0 p-1 w-100 ${styles.card_hover}`}
                                  >
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex justify-content-between align-items-center w-100 px-1">
                                        <div
                                          className="py-2"
                                          style={{ color: "#428F92" }}
                                        >
                                          {d.name_bn}
                                        </div>
                                        <div
                                          className="px-2 rounded text-white"
                                          style={{ backgroundColor: "#428F92" }}
                                        >
                                          {d?.subject_uid}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className={
                                    showToggle[key] && showToggle[key] == true
                                      ? "collapse show"
                                      : "collapse"
                                  }
                                  id={"collapseExample" + key}
                                >
                                  <div className="card card-body">
                                    <div>
                                      {d.pis.map((pis_d: any, kkey: any) => (
                                        <>
                                          <div className="py-3" key={kkey}>
                                            <div>
                                              <h6>{pis_d.name_bn}</h6>
                                            </div>
                                            <div className="card shadow-lg p-3 mt-3">
                                              <div className="table-responsive">
                                                <table className="table table-sm">
                                                  <thead>
                                                    <tr>
                                                      <th
                                                        scope="col"
                                                        style={{ width: "5%" }}
                                                      >
                                                        শিক্ষার্থীর{" "}
                                                        <BiFilterAlt className="fs-5 ms-4" />
                                                      </th>
                                                      <th
                                                        scope="col"
                                                        style={{ width: "30%" }}
                                                      ></th>
                                                      <th
                                                        scope="col"
                                                        style={{ width: "30%" }}
                                                      >
                                                        <BiFilterAlt className="fs-5" />
                                                      </th>
                                                      <th
                                                        scope="col"
                                                        style={{ width: "30%" }}
                                                      ></th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td
                                                        style={{ width: "5%" }}
                                                      >
                                                        <GoPerson className="fs-6" />{" "}
                                                        {
                                                          individual_student.student_name_bn
                                                        }{" "}
                                                        <br />
                                                        {individual_student.uid}
                                                      </td>

                                                      {pis_d.pi_attribute.map(
                                                        (
                                                          pi_attr: any,
                                                          kedy: any
                                                        ) => (
                                                          <td
                                                            style={{
                                                              width: "30%",
                                                            }}
                                                            key={kedy}
                                                          >
                                                            <div className="d-flex gap-2">
                                                              {" "}
                                                              <div
                                                                className=""
                                                                style={{
                                                                  border:
                                                                    "1px solid #eee",
                                                                  padding:
                                                                    "5px 6px",
                                                                  borderRadius:
                                                                    "3px",
                                                                  maxHeight:
                                                                    "40px",
                                                                }}
                                                                onClick={() =>
                                                                  save_PI_evalution(
                                                                    d.uid,
                                                                    pi_attr.uid,
                                                                    pi_attr.weight_uid
                                                                  )
                                                                }
                                                              >
                                                                {" "}
                                                                {pi_attr.weight
                                                                  .name ==
                                                                  "Square" && (
                                                                  <BiSquareRounded className="fs-5 mt-1" />
                                                                )}
                                                                {pi_attr.weight
                                                                  .name ==
                                                                  "Circle" && (
                                                                  <BiCircle className="fs-5 mt-1" />
                                                                )}
                                                                {pi_attr.weight
                                                                  .name ==
                                                                  "Triangle" && (
                                                                  <FiTriangle className="fs-5 mt-1" />
                                                                )}
                                                              </div>
                                                              <div>
                                                                {
                                                                  pi_attr.title_bn
                                                                }
                                                              </div>
                                                            </div>
                                                          </td>
                                                        )
                                                      )}
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </div>
                                            </div>
                                          </div>

                                          <div key={kkey}>
                                            {pis_d.name_bn}
                                            <div className="mt-5">
                                              {pis_d.pi_attribute.map(
                                                (pi_attr: any, kedy: any) => (
                                                  <ol key={kedy}>
                                                    {pi_attr.title_bn}|
                                                    <button
                                                      onClick={() =>
                                                        save_PI_evalution(
                                                          d.uid,
                                                          pi_attr.uid,
                                                          pi_attr.weight_uid
                                                        )
                                                      }
                                                      className={`btn btn-sm ${
                                                        pi_attr.weight.name ==
                                                        "Square"
                                                          ? "btn-info"
                                                          : pi_attr.weight
                                                              .name == "Circle"
                                                          ? "btn-primary"
                                                          : "btn-warning"
                                                      } `}
                                                      type="button"
                                                    >
                                                      {pi_attr.weight.name}
                                                    </button>
                                                  </ol>
                                                )
                                              )}
                                            </div>
                                          </div>
                                        </>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      }
                    </>
                  )}
                </div>
              </div>
            </div>
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
