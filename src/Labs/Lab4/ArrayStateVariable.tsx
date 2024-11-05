import React, { useState } from "react";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button onClick={addElement} className="btn btn-success">Add Element</button>
      <ul className="list-group w-25 p-2">
        {array.map((item, index) => (
          <li className="list-group-item h4 font-weight-bold" key={index}>
            {item} 
            <button onClick={() => deleteElement(index)}
                    id="wd-delete-element-click"
                    className="btn btn-danger float-end ">
              Delete</button>
          </li>
        ))}
      </ul>
      <hr/>
    </div>
  );
}
