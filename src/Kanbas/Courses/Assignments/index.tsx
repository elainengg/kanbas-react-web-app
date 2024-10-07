import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons"
import { IoMdArrowDropdown } from "react-icons/io";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { MdOutlineAssignment } from "react-icons/md";


export default function Assignments() {
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
                <AssignmentControlButtons /> </div>


              {/* the actual A1 */}
              <div className="table wd-lessons list-group rounded-0">
                {/* greenbar */}
                <div className="wd-lessons list-group rounded-0">
                  <div className="wd-lesson list-group-item p-3 ps-1">
                    <div className="container text-left">
                      {/* Row to contain the icons, content, and buttons side by side */}
                      <div className="row align-items-center">

                        <div className="col-auto">
                          <BsGripVertical className="me-2 fs-3" />
                          <MdOutlineAssignment className="me-2 fs-3" color="green" />
                        </div>

                        <div className="col">
                          <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123"
                            style={{ color: 'black', textDecoration: 'none' }}>
                            <b>A1</b>
                          </a>  < br />
                          <div className="small">
                            <span className="text-red">Multiple Modules</span>
                            <b> | Not Available until</b> May 6 at 12:00am <br />
                            <b>Due</b> May 13 at 11:59pm | 100 pts
                          </div></div>
                        <div className="col-auto">
                          <LessonControlButtons />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              {/* the actual A1 */}
              <div className="table wd-lessons list-group rounded-0">
                {/* greenbar */}
                <div className="wd-lessons list-group rounded-0">
                  <div className="wd-lesson list-group-item p-3 ps-1">
                    <div className="container text-left">
                      {/* Row to contain the icons, content, and buttons side by side */}
                      <div className="row align-items-center">

                        <div className="col-auto">
                          <BsGripVertical className="me-2 fs-3" />
                          <MdOutlineAssignment className="me-2 fs-3" color="green" />
                        </div>

                        <div className="col">
                          <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123"
                            style={{ color: 'black', textDecoration: 'none' }}>
                            <b>A2</b>
                          </a>  < br />
                          <div className="small">
                            <span className="text-red">Multiple Modules</span>
                            <b> | Not Available until</b> May 13 at 12:00am <br />
                            <b>Due</b> May 20 at 11:59pm | 100 pts
                          </div></div>
                        <div className="col-auto">
                          <LessonControlButtons />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* the actual A1 */}
              <div className="table wd-lessons list-group rounded-0">
                {/* greenbar */}
                <div className="wd-lessons list-group rounded-0">
                  <div className="wd-lesson list-group-item p-3 ps-1">
                    <div className="container text-left">
                      {/* Row to contain the icons, content, and buttons side by side */}
                      <div className="row align-items-center">

                        <div className="col-auto">
                          <BsGripVertical className="me-2 fs-3" />
                          <MdOutlineAssignment className="me-2 fs-3" color="green" />
                        </div>

                        <div className="col">
                          <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123"
                            style={{ color: 'black', textDecoration: 'none' }}>
                            <b>A3</b>
                          </a>  < br />
                          <div className="small">
                            <span className="text-red">Multiple Modules</span>
                            <b> | Not Available until</b> May 20 at 12:00am <br />
                            <b>Due</b> May 27 at 11:59pm | 100 pts
                          </div></div>
                        <div className="col-auto">
                          <LessonControlButtons />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>




            </li>
          </ul>


        </div>

      </div>


    </div>

  );
}
