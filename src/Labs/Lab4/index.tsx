import ClickEvent from "./ClickEvent"; 
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent"; 
export default function Lab4() {
    function sayHello() {
        alert("Hello");
      }
    
    return (
        <div className="container">

      <div id="wd-lab4">
  
        <h2>Lab 4</h2> 
        <ClickEvent/>
        <PassingDataOnEvent/>
        <div id="wd-passing-functions">
        <PassingFunctions theFunction={sayHello} />     </div>
        <EventObject/>
        <Counter/> 
        <BooleanStateVariables/> 
        <StringStateVariables/> 
        <DateStateVariable/>
        <ObjectStateVariable/> 
        <ArrayStateVariable/>
        <ParentStateComponent/>


        
        
        </div></div>)}; 