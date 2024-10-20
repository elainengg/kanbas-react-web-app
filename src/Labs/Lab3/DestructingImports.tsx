import React from "react";
import Math, { add, subtract, multiply, divide } from "./Math";
import * as Matematica from "./Math";
export default function DestructingImports() {
    return (
        <div id="wd-destructuring-imports">
            <h2>Destructing Imports</h2>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Math</th>
                        <th>Matematica</th>
                        <th>Functions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* see next code block */}
                    {/* first row */}
                    <tr> 
                    {/* columns of first row */}

                        <td>Math.add(2, 3) = {Math.add(2, 3)}</td>
                        <td>Matematica.add(2, 3) =
                            {Matematica.add(2, 3)}</td>
                        <td>add(2, 3) = {add(2, 3)}</td>
                    </tr>

                    {/* cols of second row */}  
                    <tr>
                        <td>Math.subtract(5, 1) = {Math.subtract(5, 1)}</td>
                        <td>Matematica.subtract(5, 1) =
                            {Matematica.subtract(5, 1)}</td>
                        <td>subtract(5, 1) = {subtract(5, 1)}</td>
                    </tr>
                    {/* cols of third row */}  
                    
                    <tr>
                        <td>Math.multiply(3, 4) = {Math.multiply(3, 4)}</td>
                        <td>Matematica.multiply(3, 4) =
                            {Matematica.multiply(3, 4)}</td>
                        <td>multiply(3, 4) = {multiply(3, 4)}</td>
                    </tr>

                    {/* cols of fourth row */}  

                    <tr>
                        <td>Math.divide(8, 2) = {Math.divide(8, 2)}</td>
                        <td>Matematica.divide(8, 2) =
                            {Matematica.divide(8, 2)}</td>
                        <td>divide(8, 2) = {divide(8, 2)}</td>
                    </tr>

                </tbody>
            </table>
            <hr />
        </div>
    );
}
