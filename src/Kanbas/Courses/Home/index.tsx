import { useSelector } from "react-redux";
import Modules from "../Modules";
import CourseStatus from "./Status";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";

export default function Home() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (

    <div className="d-flex" id="wd-home">

      <div className="flex-fill">
        <Modules />
      </div>
      <br />
      <div className="d-none d-md-block">
        {(currentUser.role === "FACULTY") && (
          <CourseStatus />)}
      </div>
    </div>

  );
}
