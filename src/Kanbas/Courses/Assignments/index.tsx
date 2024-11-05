import { useParams } from "react-router-dom";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import assignmentsData from "../../Database/assignments.json";

export default function Assignments() {
  const { cid } = useParams();

  const assignments = assignmentsData.filter((assignment) => assignment.course === cid);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }) + " at " + date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  };

  return (
    <div id="wd-assignments">
      {/* top of the assignment */}
      <AssignmentsControls /><br /><br />

      <div className="container">
        <div className="row">
          {/* where the assignment dropdown is (gray bar) */}
          <ul id="wd-modules" className="list-group rounded-0">
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                <IoMdArrowDropdown className="me-2 fs-3" />
                ASSIGNMENTS
                <AssignmentControlButtons />
              </div>

              {/* the actual assignments themselves */}
              <div className="table wd-lessons list-group rounded-0">
                {assignments.length === 0 ? (
                  <div className="wd-lesson list-group-item p-3 ps-1 text-center">
                    <div>No assignments </div>
                  </div>
                ) : (
                  //  else map 
                  assignments.map((assignment) => (
                    <div key={assignment._id} className="wd-lessons list-group rounded-0">
                      <div className="wd-lesson list-group-item p-3 ps-1">
                        <div className="container text-left">
                          {/* aligning the buttons so it looks pretty */}
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <BsGripVertical className="me-2 fs-3" />
                              <MdOutlineAssignment className="me-2 fs-3" color="green" />
                            </div>
                            <div className="col">
                              <a
                                className="wd-assignment-link"
                                href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                style={{ color: 'black', textDecoration: 'none' }}
                              >
                                <b>{assignment.title}</b>
                              </a>
                              <br />
                              {/* the words in the white box */}
                              <div className="small">
                                <span className="text-red">Multiple Modules</span>
                                <b> | Not Available until</b> {formatDate(assignment.notAvailableUntil)} <br />
                                <b>Due</b> {formatDate(assignment.dueDate)} | {assignment.points} pts
                              </div>
                            </div>
                            <div className="col-auto">
                              <LessonControlButtons />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
