import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addassignment: (state, { payload: assignment }) => {
      const newassignment: any = {
        _id: assignment.id,
       title: assignment.title,
       course: assignment.course,
       notAvailableUntil: assignment.notAvailableUntil,
       dueDate: assignment.dueDate,
       points: assignment.points,
       description: assignment.description,

      };

      state.assignments = [...state.assignments, newassignment] as any;
    },
    deleteassignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== assignmentId);
    },
    updateassignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignment._id ? assignment : m
      ) as any;
    },
    editassignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignmentId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});
export const { addassignment, deleteassignment, updateassignment, editassignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;