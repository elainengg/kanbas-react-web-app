import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      {/* <button>Collapse All</button>
      <button>View Progress</button>
      <select id="publish-module">
        <option value="publishAll">Publish All</option>
        <option value="publisLast">Publish Last</option>
        <option value="publishfirst">Publish First</option>
      </select>

      <button> + Module</button> */}

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">
            <BsGripVertical className="me-2 fs-3" />
            Week 1
            <ModulesControls />
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
                <LessonControlButtons />
              </span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" />
                  Introduction to the course
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>


        <li className="wd-module">
          <div className="wd-title">
            <BsGripVertical className="me-2 fs-3" />
            Week 2
            <ModulesControls />
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
                <LessonControlButtons />
              </span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" />
                  Second Lesson to the course
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item">Learn what is Node.js</li>
              </ul>
            </li>
          </ul>
        </li>
        </ul>

    </div>
  );
}
