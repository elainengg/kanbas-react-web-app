export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <h3><label htmlFor="wd-name">Assignment Name</label> </h3>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea cols={30} rows={10} id="wd-description">
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
          {/* Complete on your own */}
          <td>
              <input id="wd-group" />
              
            </td>
        </table>
      </div>
  );}
  