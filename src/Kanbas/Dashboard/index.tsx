import { Link } from "react-router-dom";
import * as db from "../Database";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; }) {
  // get the courses out
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={addNewCourse} > Add </button>     
                   <button className="btn btn-warning float-end me-2"
                  onClick={updateCourse} id="wd-update-course-click">
            Update
          </button>
      </h5> <hr />



      


      <br />
      <input    value={course.name} className="form-control mb-2" 
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) } />

      <textarea value={course.description} className="form-control"
                   onChange={(e) => setCourse({ ...course, description: e.target.value }) } />




      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      {/* containers for the cards */}
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          {/* card for each course in a column */}
          {courses
  .filter((course) =>
    !currentUser || !enrollments
      ? true // Show all courses if currentUser or enrollments is missing
      : enrollments.some(
          (enrollment) =>
            enrollment.user === currentUser._id &&
            enrollment.course === course._id
        ))
    .map((course) => (
      <div className="wd-dashboard-course col" style={{ width: "300px" }} >
              <div className="card rounded-3 overflow-hidden">

                {/* Link to home page */}
                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                  {/* course image */}
                  <img src={course.image} alt={`${course.name} course image`} width="100%" height={160} />

                  {/* course name */}
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name} </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description} </p>
                    {/* button for nav */}
                    <button className="btn btn-primary"> Go </button>

                    

                    <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
            </button>

            <button id="wd-edit-course-click"
  onClick={(event) => {
    event.preventDefault();
    setCourse(course);
  }}
  className="btn btn-warning me-2 float-end" >
  Edit
</button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>);
}