import React from 'react';
import { loginPassword } from '../Request';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const datas = new FormData(event.target);

    let { data } = await loginPassword(datas);

    console.log("data", data);
    if (data.success) {
      console.log("LOGIN success", data);

    } else {
      navigate("/login");
    }

  }

  return (
    <>
      <div className="login-bg">
        <div className="container">
          <div >
            <div className="row d-flex justify-content-center align-items-center login-container">
              <div className="col-md-7 cols-sm-12">
                <img src="/images/brand-logo.png" alt="logo" />
                <p className="teacher-login-title">বিষয়ভিত্তিক মূল্যায়ন অ্যাপ্লিকেশন</p>
                <p className="np-login-subtitle">অনুগ্রহ করে আপনার অ্যাকাউন্টে সাইন ইন করুন এবং অ্যাডভেঞ্চার শুরু করুন</p>
              </div>
              <div className="col-md-5 cols-sm-12">
                <div className="card login-form-card">
                  <p className="teacher-login-title text-center">লগ ইন</p>
                  {/* Form Start */}
                  <form noValidate onSubmit={handleSubmit} >


                    <div className="form-group">
                      <label htmlFor="user_type_id" className="login-field-title"> ইউজার টাইপ</label>
                      <div className="input-group">
                        <select className="form-control np-login-form-field_" name="user_type_id" required>
                          <option value={1} selected>শিক্ষক</option>
                          <option value={2}>শিক্ষার্থী</option>
                          {/* <option value="3">বিদ্যালয়</option> */}
                          <option value={4}>ব্যবহারকারী</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="caid" className="login-field-title"> ইউজার আইডি </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span>  <img src="/images/user-square.svg" className="np-login-field-icon" alt="logo" /></span>
                        </div>

                        <input type="number" id="caid" required autoComplete="off" placeholder="৯১৩১৫০৩০৩০৪০১" name="caid" className="form-control np-login-form-field" />

                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="pin" className="login-field-title"> পিন নম্বর </label>
                      <div className="input-group"><img src="/images/lock.svg" className="np-login-field-icon" alt="logo" />
                        <input type="password" id="pin" className="form-control np-login-form-field" name="password" required placeholder="Password" />
                        <div className="input-group-append password-toggle">
                          <span>
                            <i id="password-toggle" className="fa fa-eye-slash" onclick="togglePassword()" />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="form-group form-check my-4">
                      <input type="checkbox" className="form-check-input np-login-checkbox" id="remember" name="remember" />
                      <label className="form-check-label np-login-checbox-text" htmlFor="remember">পিন সংরক্ষণ করুণ</label>
                      <p className="mb-1">
                        <a href="https://accounts.project-ca.com/password/reset" className="link-success" style={{ color: '#428F92' }}>
                          পাসওয়ার্ড ভুলে গেছেন?. ক্লিক করুন
                        </a>
                      </p>
                    </div>

                    <button type="submit" className="btn login-button text-white"> লগ ইন করুন</button>
                  </form>


                  {/* Form End */}
                </div>
              </div>
            </div>
          </div>
          <div className="switch-container">
            <input type="checkbox" id="switch" className="language-switch" />
            <label htmlFor="switch" className="switch-label">
              <small className="login-language">আপনি কি বাংলাকে আপনার ডিফল্ট ভাষা হিসেবে রাখতে চান ?</small>
              <div className="switch-rail">
                <div className="switch-slider" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
