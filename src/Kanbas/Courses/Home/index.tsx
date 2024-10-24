import Modules from "../Modules";
import CourseStatus from "./Status";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";

export default function Home() {

  return (

    <div className="d-flex" id="wd-home">

      <div className="flex-fill">
        <Modules />
      </div>
      <br />
      <div className="d-none d-md-block">
        <CourseStatus />
      </div>
    </div>

  );
}
