import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> CS3500 Object Oriented Design </div>
        <div className="wd-dashboard-course"> CS2500 Fundies I </div>
        <div className="wd-dashboard-course"> CS2510 Fundies II </div>
        <div className="wd-dashboard-course"> CS3000 Algorithms and Data</div>
        <div className="wd-dashboard-course"> CS4550 Web Dev </div>
        <div className="wd-dashboard-course"> PZ9000 Pizza Making </div>
        <div className="wd-dashboard-course"> PZ9001 Pizza Making Lab </div>
        <div className="wd-dashboard-course"> PZ9100 Pizza Making II </div>
        <div className="wd-dashboard-course"> MG1000 Intro to Magic </div>
        <div className="wd-dashboard-course"> MG2000 Magic Tricks </div>
      </div>
    </div>
  );
}

