import { FaPlus } from "react-icons/fa6";
import { useParams, Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import assignmentsData from "../../Database/assignments.json";
import * as db from "../../Database";

export default function AssignmentEditor() {

  const { cid, aid } = useParams();

  const assignment = assignmentsData.find(assign => assign._id === aid);

  if (!assignment) {
    return <div>Assignment not found.</div>; // if assignment nf
  }

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
        {"The assignment is available online. Submit a link to the landing page of."}
      </textarea>
      <br /><br />

      <table className="table">
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input
              id="wd-points"
              value={assignment.points} // the points 
              className="form-control"
            />
          </td>
        </tr>
        <br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group"> Assignment Group </label>
          </td>
          <td>
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
          </td>
        </tr>
        <br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as"> Display Grade as </label>
          </td>
          <td>
            <select id="wd-display-grade-as" className="form-select mb-4 mt-3">
              <option selected value="PERCENTAGE">Percentage</option>
              <option value="LETTER">Letter</option>
              <option value="Binary">Binary</option>
            </select>
          </td>
        </tr>

        <td align="right" valign="top">
          <label htmlFor="wd-submission-type"> Submission Type </label>
        </td>

        {/* online entry for assignment */}
        <div className="col-15 border border-secondary-subtle">
          <div className="col-auto text-end">
            <select id="wd-submission-type" className="form-select mb-4 mt-3">
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
        <tr> </tr>




        {/* assigning part */}
        <td align="right" valign="top">
          <label htmlFor="wd-assign-to"> Assign</label><br />
        </td>

        <div className="mb-3 ">
          <div className="col-15 border border-secondary-subtle">
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

        <hr />

        <tr>
          <td></td>
          <td></td>
          <td>
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
          </td>
        </tr>
      </table>
    </div>
  );
}
