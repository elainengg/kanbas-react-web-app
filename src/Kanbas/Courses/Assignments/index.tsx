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



{/* where the assignment dropdown is (gray bar) */}


<ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown className="me-2 fs-3" />
          
            ASSIGNMENTS

            <AssignmentControlButtons /> </div>




            {/* the actual A1 */}
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <MdOutlineAssignment className="me-2 fs-3" />

              <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123" 
              style={{ color: 'black', textDecoration: 'none' }}>
                 <b> A1</b></a> <br />

              <LessonControlButtons />
              <span className="text-red"> Multiple Modules </span>| <b> Not Available until</b> May 6 at 12:00am | <br></br>
              <b> Due</b> May 13 at 11:59pm | 100 pts <br></br>


            </li>
            </ul>





            {/* the actual A2 */}
            <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <MdOutlineAssignment className="me-2 fs-3" />

              <a className="wd-assignment-link" 
              href="#/Kanbas/Courses/1234/Assignments/123" 
              style={{ color: 'black', textDecoration: 'none' }}>
                <b>A2</b></a> <br />

              <LessonControlButtons />
              <span className="text-red"> Multiple Modules </span> | <b> Not Available until</b> May 13 at 12:00am | <br></br>
              <b> Due</b> May 20 at 11:59pm | 100 pts <br></br>


            </li>
            </ul>

                        {/* the actual A3 */}
                        <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <MdOutlineAssignment className="me-2 fs-3" />

              <a className="wd-assignment-link" 
              href="#/Kanbas/Courses/1234/Assignments/123" 
              style={{ color: 'black', textDecoration: 'none' }}>
                <b>A3</b></a> <br />

              <LessonControlButtons />
              <span className="text-red"> Multiple Modules </span> | <b> Not Available until</b> May 20 at 12:00am |<br></br>
          <b> Due</b> May 27 at 11:59pm | 100 pts <br></br>


            </li>
            </ul>



            </li>
            </ul>






{/* 

              <BsGripVertical className="me-2 fs-3" />
              <MdOutlineAssignment className="me-2 fs-3" />
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A1 - ENV + HTML <br></br>
          </a>
          Multiple Modules | <b> Not Available until</b> May 6 at 12:00am | <br></br>
          <b> Due</b> May 13 at 11:59pm | 100 pts <br></br>
        </li>
 */}

        {/* <li className="wd-assignment-list-item">
 
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A2 - CSS + BOOTSTRAP <br></br>
          </a>
          Multiple Modules | <b> Not Available until</b> May 13 at 12:00am | <br></br>
          <b> Due</b> May 20 at 11:59pm | 100 pts <br></br>
        </li> */}

{/* 
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A3 - JAVASCRIPT + REACT <br></br>
          </a>
          Multiple Modules | <b> Not Available until</b> May 20 at 12:00am |<br></br>
          <b> Due</b> May 27 at 11:59pm | 100 pts<br></br>
        </li> */}
    </div>
  );
}
