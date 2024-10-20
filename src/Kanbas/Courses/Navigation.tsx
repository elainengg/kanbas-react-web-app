import { Link, useLocation, useParams } from "react-router-dom";


export default function CoursesNavigation() {
  // need courseID from URL 
  const { courseId } = useParams();
  // path to class 
  const { pathname } = useLocation();

  // links
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];


  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = `/Kanbas/Courses/${courseId}/${link}`; // path for each link

        return (
          <Link
            key={link}
            to={path}
            className="list-group-item text-danger border border-0">
            {link}
          </Link>
        );
      })}
    </div>
  );
}