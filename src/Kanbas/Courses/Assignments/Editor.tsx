import { FaPlus } from "react-icons/fa6";
import { useParams, Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import assignmentsData from "../../Database/assignments.json";
import * as db from "../../Database";

export default function AssignmentEditor() {

  // save function that calls reducer pass new assignment manipulate new assignment
  const { cid, aid } = useParams();

  const currentassignment = assignmentsData.find(assign => assign._id === aid);

  const newAssignment = {
    title: "",
    description: "",
    points: 0,
    dueDate: "",
    notAvailableUntil: "",
    group: "ASSIGNMENTS",
    displayGradeAs: "PERCENTAGE",
    submissionType: "ONLINE",
    assignTo: "EVERYONE"
  };
  const assignment = currentassignment || newAssignment; 

  return (
    <div id="wd-assignments-editor" className="container">
      <h3><label htmlFor="wd-name">Assignment Name</label></h3>

      <input
        id="wd-name"
        value={assignment.title} // get the title out
        className="form-control"
      />
      <br /><br />

      <textarea
        cols={30}
        rows={10}
        id="wd-description"
        className="form-control"
      >
        {assignment.description}
      </textarea>
      <br /><br />

      <table className="table">
        <div className="row">
          <div className="text-end align-top col">
            <label htmlFor="wd-points">Points</label>
          </div>
          <div className="col">
            <input
              id="wd-points"
              value={assignment.points} // the points 
              className="form-control p-2"
            />
          </div>
        </div>
        <br />

        <div className="row">
          <div className="text-end align-top col">
            <label htmlFor="wd-group"> Assignment Group </label>
          </div>
          <div className="col">
            <select id="wd-group" className="form-select mb-4 mt-3">
              <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="LABS">LABS</option>
              <option value="QUIZ">QUIZ</option>
              <option value="EXAM">EXAM</option>
            </select>
            <IoMdArrowDropdown
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none'
              }}
            />
          </div>
        </div>
        <br />

        <div className="row">
        <div className="text-end align-top col">
            <label htmlFor="wd-display-grade-as"> Display Grade as </label>
          </div>
          <div className="col">
            <select id="wd-display-grade-as" className="form-select mb-4 mt-3">
              <option selected value="PERCENTAGE">Percentage</option>
              <option value="LETTER">Letter</option>
              <option value="Binary">Binary</option>
            </select>
          </div>
        </div>

        <div className="row">
        <div className="text-end align-top col">

          <label htmlFor="wd-submission-type"> Submission Type </label>
        </div>
        <div className="col">
        {/* online entry for assignment */}
        <div className="col-13 border border-secondary-subtle">
          <div className="col-auto text-end">
            <select id="wd-submission-type" className="form-select mb-4 mt-3 p-2">
              <option selected value="ONLINE">Online</option>
              <option value="PDF">PDF</option>
              <option value="WORD">Word</option>
            </select>
         
          </div>
          <div className="mb-3 ">
            <div className="mb-3">
              <label><b>Online Entry Options</b></label><br />
            </div>
            <div className="mb-1">
              <div className="col-sm-10">
                <input type="checkbox" name="check-entry" className="form-check-input" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label><br />
                <input type="checkbox" name="check-entry" className="form-check-input" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label><br />
                <input type="checkbox" name="check-entry" className="form-check-input" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                <input type="checkbox" name="check-entry" className="form-check-input" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                <input type="checkbox" name="check-entry" className="form-check-input" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Uploads</label><br />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row"> </div> */}
        </div>
        </div>
        <div/>




        {/* assigning part */}
        <div className="row">

         <div className="text-end align-top col">
          <label htmlFor="wd-assign-to"> Assign</label><br />
        </div>

        <div className="col">
          <div className="col-13 border border-secondary-subtle">
            <div className="col-auto text-front">
              <label htmlFor="wd-assign-to"><b>Assign to</b></label><br />
              <select className="form-control" id="wd-assign-to">
                <option selected value="EVERYONE">Everyone</option>
              </select>
              {/* all of the dates in the json file is yy-mm-dd */}
              <label htmlFor="wd-due-date"><b>Due</b></label><br />
              <input
                type="date"
                className="form-control"
                id="wd-due-date"
                value={assignment.dueDate}
              /><br />

              <div className="row mb-5 ">
                <div className="col">
                  <label htmlFor="wd-available-from"><b>Available from</b></label><br />
                  <input
                    type="date"
                    className="form-control"
                    id="wd-available-from"
                    value={assignment.notAvailableUntil}
                  />
                </div>

                <div className="col">
                  <label htmlFor="wd-available-until"><b>Until</b></label><br />
                  <input
                    type="date"
                    className="form-control"
                    id="wd-available-until"
                    value={assignment.dueDate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>


        <hr />

        <div className="row">
        <div className="col">

          {/* <td></td>
          <td></td>
          <td> */}
            {/* navs back to the assignment page */}
            <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-lg btn-danger me-1 float-end" id="wd-cancel-button">
              Cancel
            </Link>

            <button
              className="btn btn-lg btn-secondary me-1 float-end"
              id="wd-save-button"
              onClick={() => alert("Saving Assignment Edits!")}
              type="button"
            >
              Save
            </button>
          {/* </td> */}
        </div>

        </div>
      </table>
    </div>
  );
}
