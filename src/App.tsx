import { Route, Routes } from 'react-router-dom';
import PrivateRoute from "./component/PrivateRoute";
import Login from "./component/Login";
import Topbar from "./layout/Topbar";
import Footer from "./layout/Footer";
import Home from "./component/Home";
import { useEffect, useState } from "react";
import StudentMullayon from './component/StudentMullayon';
import Teacher from './component/Teacher';
import ClassWiseSubject from './component/ClassWiseSubject';
import StudentList from './component/StudentList';
import TeachersList from './component/TeachersList';

function App() {
  const [topbar, settopbar] = useState(false)
  const fetchData = async () => {
    if (window.location.pathname !== "/login") {
      settopbar(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [window.location.pathname]);

  return (

    <>

      {
        topbar && <Topbar />
      }

      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/student-mullayon/:assessment_uid" element={<StudentMullayon />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/teachers-list/" element={<TeachersList />} />
          <Route path="/class/:id" element={<ClassWiseSubject />} />
          <Route path="/student-list" element={<StudentList />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>

      {
        topbar && <Footer />
      }

    </>
  );
}

export default App;
