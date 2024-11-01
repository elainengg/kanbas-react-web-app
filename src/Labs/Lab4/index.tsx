import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions"; 
import EventObject from "./EventObject"; 

export default function Lab4() {
    function sayHello() {
        alert("Hello");
      }
    
    return (
        <div id="wd-lab1"> 
        <h2>Lab 4</h2> 
      <ClickEvent />
      <PassingDataOnEvent/> 
      <PassingFunctions theFunction={sayHello} />




      </div>);


  }