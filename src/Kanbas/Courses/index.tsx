import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { courses } from "../Database";
import Users from "../Account/Users";


export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {/* this means greater than: &gt aka > symbol */}
        {course && course.name} &gt; {pathname.split("/")[4]}

      </h2> <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />

            <Route path="Assignments" element={<h2>Assignments</h2>} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />


            <Route path="Assignments/:aid" element={<h2>Assignment Editor</h2>} />
            <Route path="People" element={<Users />} />
          </Routes>
        </div></div>
    </div>
  );
}
