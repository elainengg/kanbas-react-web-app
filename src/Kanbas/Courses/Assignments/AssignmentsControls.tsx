import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";


// the top of the assignment page with search bar, + Group, + Assignment
export default function AssignmentControls() {
    const { cid } = useParams();

    const navigate = useNavigate(); // Hook to programmatically navigate

    const handleAddAssignment = () => {
        // Navigate to the assignment editor with a new assignment (no aid)
        navigate(`/Kanbas/Courses/${cid}/Assignments/New`); // Adjust the path as necessary
    };
    return (

        <div id="wd-assignment-controls" className="text-nowrap">
            <button
                id="wd-add-assignment-btn"
                className="btn btn-lg btn-danger me-1 float-end"
                onClick={handleAddAssignment} // Add click handler
            >
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </button>

            <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group</button>

            <div className="input-group" style={{ height: '60px', width: '700px' }}>
                <span className="input-group-text">
                    <FaSearch />
                </span>
                <input id="wd-search-assignment" className="form-control" placeholder="Search for Assignments" />
            </div>

        </div>
    );
}