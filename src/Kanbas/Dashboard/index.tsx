import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";

// defined an interface because the code was being annoying
interface WhatProps {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: any) => void;
  updateCourse: () => void;
}

export default function What({
  // so the type can be read
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: WhatProps) {
  return (
    <div id="wd-account-screen">
      <table>
        <tr>
          <td valign="top">
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}
            />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="/Kanbas/Dashboard" />} />
              <Route path="/Signin" element={<Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}
