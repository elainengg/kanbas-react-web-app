import { Link, useLocation, useParams } from "react-router-dom";


export default function CoursesNavigation() {
  // need courseID from URL 
  const { cid } = useParams();
  // path to class 
  const { pathname } = useLocation();

  // links
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];


  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = `/Kanbas/Courses/${cid}/${link}`; //  path for each link
        const isActive = pathname.includes(link); // if the current link is active then make text-dark 

        return (
          <Link
            key={link}
            to={path}
            className={`list-group-item border border-0 ${isActive ? 'active text-dark' : 'text-danger'}`}>
            {link}
          </Link>
        );
      })}
    </div>
  );
}