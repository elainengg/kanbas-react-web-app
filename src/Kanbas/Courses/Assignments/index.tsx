import { useNavigate, useParams } from "react-router-dom";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const assignments = assignmentsData.filter((assignment) => assignment.course === cid);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }) + " at " + date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  };

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-assignments">
      {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN" ) && (
        <AssignmentsControls />)}<br /><br />

      <div className="container">
        <div className="row">
          {/* where the assignment dropdown is (gray bar) */}
          <ul id="wd-modules" className="list-group rounded-0">
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                <IoMdArrowDropdown className="me-2 fs-3" />
                ASSIGNMENTS
                {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN" ) && (

                  <AssignmentControlButtons />)}
              </div>


              {/* the actual assignments themselves */}
              <div className="table wd-lessons list-group rounded-0">
                {assignments.length === 0 ? (
                  <div className="wd-lesson list-group-item p-3 ps-1 text-center">
                    <div>No assignments </div>
                  </div>
                ) : (
                  //  else map 
                  assignments.filter((a: any) => a.course === cid)
                    .map((assignment: any) => (

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
                                  
                                  // href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
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
                              {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN" ) && (
                              <FaPencil onClick={() => 
                                    navigate(`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`)} 
                                  className="text-primary me-3" />)}
                                {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN" ) && (

                                  <FaTrash className="text-danger me-2 fs-4"
                                    onClick={() => dispatch(deleteAssignment(assignment._id))} />)}
                                {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN" ) && (<LessonControlButtons />)}
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
