export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h3><label htmlFor="wd-name">Assignment Name</label> </h3>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea cols={70} rows={20} id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br /><br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
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
            <select id="wd-group">
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
            <select id="wd-display-grade-as">
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
          <td>
            <select id="wd-submission-type">
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
            <label>Online Entry Options</label> <br />
          </td>

          <input type="checkbox" name="check-entry" id="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label><br />

          <input type="checkbox" name="check-entry" id="wd-website-url" />
          <label htmlFor="wd-website-url">Website URL</label><br />

          <input type="checkbox" name="check-entry" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings">Media Recordings</label><br />

          <input type="checkbox" name="check-entry" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation">Student Annotation</label><br />

          <input type="checkbox" name="check-entry" id="wd-file-upload" />
          <label htmlFor="wd-file-upload">File Uploads</label><br />

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
            <label htmlFor="wd-assign-to"> Assign to</label><br />
            <select id="wd-assign-to">
              <option selected value="EVERYONE">Everyone</option>
            </select>
          </td>
        </tr>
        <br />




        <tr>
          <td> </td>
          <td>
            <label htmlFor="wd-due-date"> Due </label><br />
            <input type="date"
              id="wd-due-date"
              value="2024-05-06" /><br />

          </td>
        </tr>
        <br />


        <tr>
          <td> </td>

          <td>
            <label htmlFor="wd-available-from"> Available from </label><br />
            <input type="date"
              id="wd-available-from"
              value="2024-05-06" />
            <br />
          </td>


          <td>
            <label htmlFor="wd-available-until"> Until </label><br />
            <input type="date"
              id="wd-available-until"
              value="2024-05-20" /><br />
          </td>
        </tr>

        <hr />

        <tr>

          <td></td>

          <td></td>

          <td>
            <button id="wd-cancel-button" onClick={() => alert("Cancelling Assignment Edits")} type="button">
              Cancel
            </button>

            <button id="wd-save-button" onClick={() => alert("Saving Assignment Edits!")} type="button">
              Save
            </button>
          </td>

        </tr>



      </table>
    </div>
  );
}
