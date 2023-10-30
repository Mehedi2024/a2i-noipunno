import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { all_class } from "../Request";

export default function Topbar() {
  const [classdata, setdata] = useState([]);
  // const navigate = useNavigate();

  const handleLogout = (e:any) => {
    localStorage.clear();
    window.location.reload();
    // window.location = window.location.origin;
    console.log("Logout successful" , e);
  };

  const fetchData = async () => {
    const { data }: any = await all_class();
    if (data.status) {
      setdata(data.data);
    }
  };



  // const handleClassData = async (clss_id: any) => {
  //   const classData = await clssWiseData(clss_id)
  //   console.log("ClssWiseData=============", classData.data.data)
  // };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <section className="noipunno-navbar-section np">
        <div className="container noipunno-navbar-container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src="/assets/images/noipunno-new-logo.svg" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse navbar-end"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav d-flex justify-content-end ms-auto align-items-center">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle noipunno-dropdown"
                      href="#"
                      id="navbarDropdownUser"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div className="user-section">
                        <img src="/assets/images/user-profile.png" alt="" />
                      </div>
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownUser"
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={(e: any) => handleLogout(e)}
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <hr />
        <div className="container noipunno-navbar-container ">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="d-flex justify-content-between w-100">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <img src="/assets/images/home.svg" alt="" />
              </button>
              <div
                className="offcanvas offcanvas-start d-lg-none"
                tabIndex={-1}
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                    <a className="navbar-brand" href="/">
                      <img src="/assets/images/noipunno-new-logo.svg" alt="" />
                    </a>
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body subheader-accordion">
                  <div className="accordion accordion-flush" id="prothomPata">
                    <div className="accordion-item">
                      <h2
                        className="accordion-header "
                        id="prothompata-headingOne"
                      >
                        <button
                          className="accordion-button collapsed d-flex justify-content-between align-items-center  w-100"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#prothompata-collapseOne"
                          aria-expanded="false"
                          aria-controls="prothompata-collapseOne"
                        >
                          <img src="/assets/images/home.svg" alt="" />
                          <span className="fs-6 px-2">প্রথম পাতা</span>
                        </button>
                      </h2>
                      <div
                        id="prothompata-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="prothompata-headingOne"
                        data-bs-parent="#prothomPata"
                      >
                        <div className="accordion-body d-flex flex-column py-0 px-0 pages-buttons">
                          <a href="#" className="d-block ">
                            <button className="w-100 btn btn-light px-5 text-start">
                              প্রধান শিক্ষক
                            </button>
                          </a>
                          <a href="#" className="d-block ">
                            <button className="w-100 btn btn-light px-5 text-start">
                              বিষয়ভিত্তিক শিক্ষা
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion accordion-flush" id="report">
                    <div className="accordion-item">
                      <h2 className="accordion-header " id="report-headingOne">
                        <button
                          className="accordion-button collapsed d-flex justify-content-between align-items-center  w-100"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#report-collapseOne"
                          aria-expanded="false"
                          aria-controls="report-collapseOne"
                        >
                          <img src="/assets/images/report.svg" alt="" />
                          <span className="fs-6 px-2">রিপোর্ট</span>
                        </button>
                      </h2>
                      <div
                        id="report-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="report-headingOne"
                        data-bs-parent="#report"
                      >
                        <div className="accordion-body d-flex flex-column py-0 px-0 pages-buttons">
                          <Link to={"/student-mullayon"} className="d-block ">
                            <button className="w-100 btn btn-light px-5 text-start">
                              শিক্ষার্থীদের মূল্যায়ন
                            </button>
                          </Link>
                          <a href="#" className="d-block ">
                            <button className="w-100 btn btn-light px-5 text-start">
                              শিক্ষার্থীর ট্রান্সক্রিপ্ট
                            </button>
                          </a>
                          <a href={"/product-details/"} className="d-block ">
                            <button className="w-100 btn btn-light px-5 text-start">
                              শ্রেণির প্রতিবেদন
                            </button>
                          </a>
                          <a href="#" className="d-block ">
                            <button className="w-100 btn btn-light px-5 text-start">
                              শিক্ষার্থীর হাজিরা প্রতিবেদন
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion accordion-flush responsive-single-menu-button"
                    id="shikkhok"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header pages-buttons"
                        id="shikkhok-headingOne"
                      ><a href="/teachers-list" className="text-decoration-none">
                        <button
                          className="accordion-button collapsed d-flex justify-content-between align-items-center  w-100 responsive-single-menu-button"
                          type="button"
                        >
                          
                            <img src="/assets/images/teacher.svg" alt="" />
                            <span className="fs-6 px-2">শিক্ষক</span>
                          
                        </button>
                        </a>
                      </h2>
                    </div>
                  </div>
                  <div className="accordion accordion-flush" id="shikkharthi">
                    <div className="accordion-item">
                      <h2
                        className="accordion-header "
                        id="shikkharthi-headingOne"
                      >
                        <button
                          className="accordion-button collapsed d-flex justify-content-between align-items-center  w-100"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#shikkharthi-collapseOne"
                          aria-expanded="false"
                          aria-controls="shikkharthi-collapseOne"
                        >
                          <img src="/assets/images/student.svg" alt="" />
                          <span className="fs-6 px-2">শিক্ষার্থী</span>
                        </button>
                      </h2>
                      <div
                        id="shikkharthi-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="shikkharthi-headingOne"
                        data-bs-parent="#shikkharthi"
                      >
                        <div className="accordion-body d-flex flex-column py-0 px-0 pages-buttons">
                          <a href="#" className="d-block ">
                            <button className="w-100 btn btn-light px-5 text-start">
                              শিক্ষার্থীর তালিকা
                            </button>
                          </a>
                          <a href="#" className="d-block ">
                            <button className="w-100 btn btn-light px-5 text-start">
                              শিক্ষার্থীর হাজিরা
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion accordion-flush" id="sreni">
                    <div className="accordion-item">
                      <h2 className="accordion-header " id="sreni-headingOne">
                        <button
                          className="accordion-button collapsed d-flex justify-content-between align-items-center  w-100"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#sreni-collapseOne"
                          aria-expanded="false"
                          aria-controls="sreni-collapseOne"
                        >
                          <img src="/assets/images/class.svg" alt="" />
                          <span className="fs-6 px-2">শ্রেণি</span>
                        </button>
                      </h2>
                      <div
                        id="sreni-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="sreni-headingOne"
                        data-bs-parent="#sreni"
                      >
                        <div className="accordion-body d-flex flex-column py-0 px-0 pages-buttons">
                          {classdata.map((d: any, k) => (
                            <a href="#" className="d-block " key={k}>
                              <button className="w-100 btn btn-light px-5 text-start">
                                {d.name_bn}
                              </button>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion accordion-flush responsive-single-menu-button"
                    id="shikkhok"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header pages-buttons"
                        id="onurodh-headingOne"
                      >
                        <button
                          className="accordion-button collapsed d-flex justify-content-between align-items-center  w-100 responsive-single-menu-button"
                          type="button"
                        >
                          <img src="/assets/images/request.svg" alt="" />
                          <span className="fs-6 px-2">অনুরোধসমূহ</span>
                        </button>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-none d-lg-flex pages-buttons">
                <div className="dropdown">
                  <button
                    className="d-flex justify-content-between align-items-center btn btn-ligh"
                    type="button"
                    id="prothomPata"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="/assets/images/home.svg" alt="" />
                    <span className="fs-6 px-2">প্রথম পাতা</span>
                    <img src="/assets/images/arrow-down.svg" alt="" />
                  </button>
                  <div className="dropdown-menu" aria-labelledby="prothomPata">
                    <div className="create-profile-dropdown-container">
                      <a className="dropdown-item">
                        <div className="d-flex t">
                          <span>প্রধান শিক্ষক</span>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="d-flex ">
                          <span>বিষয়ভিত্তিক শিক্ষা</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    className="d-flex justify-content-between align-items-center btn btn-ligh"
                    type="button"
                    id="prothomPata"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="/assets/images/arrow-down.svg" alt="" />
                    <span className="fs-6 px-2">রিপোর্ট</span>
                    <img src="/assets/images/arrow-down.svg" alt="" />
                  </button>
                  <div className="dropdown-menu" aria-labelledby="prothomPata">
                    <div className="create-profile-dropdown-container">
                      <Link to={"/student-mullayon"} className="dropdown-item">
                        <div className="d-flex ">
                          <span>শিক্ষার্থীদের মূল্যায়ন</span>
                        </div>
                      </Link>

                      <a className="dropdown-item">
                        <div className="d-flex ">
                          <span>শিক্ষার্থীর ট্রান্সক্রিপ্ট</span>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="d-flex ">
                          <span>শ্রেণির প্রতিবেদন</span>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="d-flex ">
                          <span>শিক্ষার্থীর হাজিরা প্রতিবেদন</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="dropdown">

                
                <div
                    className="accordion accordion-flush responsive-single-menu-button"
                    id="shikkhok"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header pages-buttons"
                        id="shikkhok-headingOne"
                      >

                  
                        <button
                          className="accordion-button collapsed d-flex justify-content-between align-items-center  w-100 responsive-single-menu-button"
                          type="button"
                        >
                          <Link to="/teachers-list" className="text-decoration-none">
                          
                            <img src="/assets/images/teacher.svg" alt="" />
                            <span className="fs-6 px-2">শিক্ষক</span>
                            </Link>
                        </button>
</h2>
</div>
</div>
                


                </div>
                <div className="dropdown">
                  <button
                    className="d-flex justify-content-between align-items-center btn btn-ligh"
                    type="button"
                    id="prothomPata"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="/assets/images/student.svg" alt="" />
                    <span className="fs-6 px-2">শিক্ষার্থী</span>
                    <img src="/assets/images/arrow-down.svg" alt="" />
                  </button>
                  <div className="dropdown-menu" aria-labelledby="prothomPata">
                    <div className="create-profile-dropdown-container">
                      <Link to={'/student-list'} className="dropdown-item">
                        <div className="d-flex ">
                          <span>শিক্ষার্থীর তালিকা</span>
                        </div>
                      </Link>
                      <Link to={'/'} className="dropdown-item">
                        <div className="d-flex ">
                          <span>শিক্ষার্থীর হাজিরা</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    className="d-flex justify-content-between align-items-center btn btn-ligh"
                    type="button"
                    id="prothomPata"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="/assets/images/class.svg" alt="" />
                    <span className="fs-6 px-2">শ্রেণি</span>
                    <img src="/assets/images/arrow-down.svg" alt="" />
                  </button>
                  <div className="dropdown-menu" aria-labelledby="prothomPata">
                    <div className="create-profile-dropdown-container">
                      <Link to={"/class/6"} className="dropdown-item">
                        <div className="d-flex ">
                          <span>ষষ্ঠ শ্রেণি</span>
                        </div>
                      </Link>
                      <Link to={"/class/7"} className="dropdown-item">
                        <div className="d-flex ">
                          <span>সপ্তম শ্রেণি</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    className="d-flex justify-content-between align-items-center btn btn-ligh"
                    type="button"
                    id="prothomPata"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="/assets/images/request.svg" alt="" />
                    <span className="fs-6 px-2">অনুরোধসমূহ</span>
                  </button>
                </div>
              </div>
              <div>
                <div className="dropdown">
                  <button
                    className="np-btn-form-submit border-0 rounded-1 d-flex justify-content-between align-items-center rounded-1 dropdown-toggle"
                    type="button"
                    id="createMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="/assets/images/add.svg" alt="" />
                    <span className="px-3">যোগ করুন</span>
                    <img src="/assets/images/arrow-down-white.svg" alt="" />
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="createMenuButton"
                  >
                    <div className="create-profile-dropdown-container">
                      <a
                        className="dropdown-item"
                        href="https://teacher.project-ca.com/teachers"
                      >
                        <div className="d-flex align-items-center">
                          <img
                            className="d-block pe-2"
                            src="/assets/images/teacher.svg"
                            alt=""
                          />
                          <span>শিক্ষক যোগ করুন</span>
                        </div>
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://teacher.project-ca.com/noipunno-dashboard/branch-add"
                      >
                        <div className="d-flex align-items-center">
                          <img
                            className="d-block pe-2"
                            src="/assets/images/student.svg"
                            alt=""
                          />
                          <span>ব্রাঞ্চ যোগ করুন</span>
                        </div>
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://teacher.project-ca.com/noipunno-dashboard/version-add"
                      >
                        <div className="d-flex align-items-center">
                          <img
                            className="d-block pe-2"
                            src="/assets/images/student.svg"
                            alt=""
                          />
                          <span>ভার্সন যোগ করুন</span>
                        </div>
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://teacher.project-ca.com/students"
                      >
                        <div className="d-flex align-items-center">
                          <img
                            className="d-block pe-2"
                            src="/assets/images/student.svg"
                            alt=""
                          />
                          <span>শিক্ষার্থী যোগ করুন</span>
                        </div>
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://teacher.project-ca.com/noipunno-dashboard/shift-add"
                      >
                        <div className="d-flex align-items-center">
                          <img
                            className="d-block pe-2"
                            src="/assets/images/student.svg"
                            alt=""
                          />
                          <span>শিফট যোগ করুন</span>
                        </div>
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://teacher.project-ca.com/noipunno-dashboard/section-add"
                      >
                        <div className="d-flex align-items-center">
                          <img
                            className="d-block pe-2"
                            src="/assets/images/student.svg"
                            alt=""
                          />
                          <span>সেকশন যোগ করুন</span>
                        </div>
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://teacher.project-ca.com/noipunno-dashboard/classroom-add"
                      >
                        <div className="d-flex align-items-center">
                          <img
                            className="d-block pe-2"
                            src="/assets/images/student.svg"
                            alt=""
                          />
                          <span>শাখা যোগ করুন</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
      <section className="empty-section" />
    </div>
  );
}
