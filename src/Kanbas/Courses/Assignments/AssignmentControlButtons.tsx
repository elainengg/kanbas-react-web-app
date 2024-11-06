import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

export default function AssignmentControlButtons() {
  const navigate = useNavigate();
  const { cid } = useParams();

  const handleAddAssignmentClick = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
  };

  return (
    <div className="float-end">
      <span className="badge rounded-pill text-bg-secondary border">40% of Total</span>
      
      <FaPlus onClick={handleAddAssignmentClick} style={{ cursor: "pointer" }} />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
