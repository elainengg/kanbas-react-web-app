import React, { useState } from "react";
export default function EventObject() {
  const [event, setEvent] = useState(null);// initialize event

  const handleClick = (e: any) => {// on click receive event

    e.target = e.target.outerHTML;// replace target with HTML
    delete e.view;// to avoid circular reference
    setEvent(e);// set event object
  }; // so it can be displayed
  return (
    <div>
      <h2>Event Object</h2>
      {/* // button that triggers event
// when clicked passes event
// to handler to update
// variable

// convert event object into
// string to display
 */}
      <button onClick={(e) => handleClick(e)}     
        className="btn btn-primary"
        id="wd-display-event-obj-click">
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr/>
    </div>
);}
