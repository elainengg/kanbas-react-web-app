import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <p className="wd-dashboard-course-title card-text">
                    Fall 2024 Semester Full Term
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <br /> <br /> <br />

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/CS3500.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS3500 OOD
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Object Oriented Design ___________________
                  </p>
                  <p className="wd-dashboard-course-title card-text">
                    Fall 2024 Semester Full Term
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <br /> <br /> <br />


          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/CS2500.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2500 Fundies I
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Foundations of Computer Science I
                  </p>
                  <p className="wd-dashboard-course-title card-text">
                    Fall 2024 Semester Full Term
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <br /> <br /> <br />


          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/CS2510.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2510 Fundies II
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Foundations of Computer Science II
                  </p>
                  <p className="wd-dashboard-course-title card-text">
                    Fall 2024 Semester Full Term
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <br /> <br /> <br />



          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/CS3000.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS3000
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Algorithms and Data ___________________
                  </p>
                  <p className="wd-dashboard-course-title card-text">
                    Fall 2024 Semester Full Term
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <br /> <br /> <br />


          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/CS4550.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS4550 Web Dev
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Web Development   ___________________
                  </p>
                  <p className="wd-dashboard-course-title card-text">
                    Fall 2024 Semester Full Term
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <br /> <br /> <br />





          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/PZ9000.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    PZ9000
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Pizza Making    ___________________
                  </p>
                  <p className="wd-dashboard-course-title card-text">
                    Fall 2024 Semester Full Term
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <br /> <br /> <br />


          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/PZ9001.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    PZ9001
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Pizza Making Lab   ___________________
                  </p>
                  <p className="wd-dashboard-course-title card-text">
                    Fall 2024 Semester Full Term
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <br /> <br /> <br />


          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/PZ9100.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    PZ9100
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Pizza Making II   ___________________
                  </p>
                  <p className="wd-dashboard-course-title card-text">
                    Fall 2024 Semester Full Term
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <br /> <br /> <br />


          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/MG1000.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    MG1000
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Intro to Magic   ___________________
                  </p>
                  <p className="wd-dashboard-course-title card-text">
                    Fall 2024 Semester Full Term
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <br /> <br /> <br />

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/MG1100.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    MG1100
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Magic Tricks   ___________________
                  </p>
                  <p className="wd-dashboard-course-title card-text">
                    Fall 2024 Semester Full Term
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <br /> <br /> <br />

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/MG2100.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    MG2100
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Magic Development   ___________________
                  </p>
                  <p className="wd-dashboard-course-title card-text">
                    Fall 2024 Semester Full Term
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <br /> <br /> <br />

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/MG3000.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    MG3000
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Rizz   ___________________
                  </p>
                  <p className="wd-dashboard-course-title card-text">
                    Fall 2024 Semester Full Term
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <br /> <br /> <br />

        </div>
      </div></div>
  );
}

