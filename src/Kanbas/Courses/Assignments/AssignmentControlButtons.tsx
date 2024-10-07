import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";

import { FaP, FaPlus } from "react-icons/fa6";

// stuff in gray box
export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            <span className="badge rounded-pill text-bg-secondary border " >40% of Total</span>





            <FaPlus />
            <IoEllipsisVertical className="fs-4" />



        </div>



    );
}