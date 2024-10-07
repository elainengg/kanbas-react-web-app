import { FaPlus } from "react-icons/fa6";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container">
      <h3><label htmlFor="wd-name">Assignment Name</label> </h3>

      <input id="wd-name"
        value="A1 - ENV + HTML"
        className="form-control" /> <br /><br />
      <textarea
        cols={70}
        rows={20}
        id="wd-description"
        className="form-control">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br /><br />

      <table className="table">
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100}
              className="form-control" />
          </td>
        </tr>


        <br />


        <tr>
          {/* Complete on your own */}
          {/* label */}
          <td
            align="right" valign="top">
            <label htmlFor="wd-group"> Assignment Group </label>
          </td>

          <td>
            <select id="wd-group" className="form-control">
              <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="LABS">LABS</option>
              <option value="QUIZ">
                QUIZ</option>
              <option value="EXAM">EXAM</option>
            </select>
          </td>
        </tr>


        <br />


        <tr>
          <td
            align="right" valign="top">
            <label htmlFor="wd-display-grade-as"> Display Grade as </label>
          </td>
          <td>
            <select id="wd-display-grade-as" className="form-control">
              <option selected value="PERCENTAGE">Percentage</option>
              <option value="LETTER">Letter</option>
              <option value="Binary">
                Binary</option>
            </select>
          </td>
        </tr>


        <br />


        <tr>
          <td
            align="right" valign="top">
            <label htmlFor="wd-submission-type"> Submission Type </label>
          </td>
          {/* <div className="wd-border-solid wd-border-thin"></div> */}
          <td>
          
            <select id="wd-submission-type" className="form-control">
              <option selected value="ONLINE">Online</option>
              <option value="PDF">PDF</option>
              <option value="WORD">Word</option>
            </select>
          </td>
        </tr>


        <br />


        <td>
          <br />
          <td 
            align="right" valign="top">
            <label> <b>Online Entry Options </b> </label> <br />
          </td>
          <div className="form-check">
            <div className="col-sm-10">


              <input type="checkbox" name="check-entry" className="form-check-input" id="wd-text-entry" />
              <label htmlFor="wd-text-entry" >Text Entry</label><br />

              <input type="checkbox" name="check-entry" className="form-check-input" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label><br />

              <input type="checkbox" name="check-entry" className="form-check-input" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label><br />

              <input type="checkbox" name="check-entry" className="form-check-input" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label><br />

              <input type="checkbox" name="check-entry" className="form-check-input" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label><br />
            </div></div>
            
        </td>

        <tr></tr>
        
        <tr></tr>
        

        <br />
        <br />

        <tr>

          <td
            align="right" valign="top">
            <label htmlFor="wd-assign-to"> Assign</label><br />
          </td>

          <td>
            <label htmlFor="wd-assign-to"> <b>Assign to</b></label><br />
            <select className="form-control" id="wd-assign-to">
              <option selected value="EVERYONE">Everyone</option>
            </select>
          </td>
        </tr>
        <br />




        <tr>
          <td> </td>
          <td>
            <label  htmlFor="wd-due-date"> <b>Due</b> </label><br />
            <input type="date" className="form-control"
              id="wd-due-date"
              value="2024-05-06" /><br />

          </td>
        </tr>
        <br />


        <tr>
          <td> </td>

          <td>
            <label htmlFor="wd-available-from"> <b>Available from</b> </label><br />
            <input type="date" className="form-control"
              id="wd-available-from"
              value="2024-05-06" />
            <br />
          </td>


          <td>
            <label htmlFor="wd-available-until"> <b>Until </b></label><br />
            <input type="date" className="form-control"
              id="wd-available-until"
              value="2024-05-20" /><br />
          </td>
        </tr>

        <hr />

        <tr>

          <td></td>

          <td></td>

          <td>


                
            <button 
            className="btn btn-lg btn-danger me-1 float-end"
            id="wd-cancel-button" 
            
            onClick={() => alert("Cancelling Assignment Edits")} 
            type="button">
              
              Cancel
            </button>

            <button className="btn btn-lg btn-secondary me-1 float-end" id="wd-save-button" onClick={() => alert("Saving Assignment Edits!")} type="button">
              Save
            </button>
          </td>

        </tr>



      </table>
    </div>
  );
}
