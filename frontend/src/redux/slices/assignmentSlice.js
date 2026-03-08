import { createSlice } from "@reduxjs/toolkit"

const assignmentSlice = createSlice({
    name: "assignments",
    initialState: {
        assignments: [],
        selectedAssignment: null,
        loading: false
    },
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload
        },

        setSelectedAssignment: (state, action) => {
            state.selectedAssignment = action.payload
        },

        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const { setAssignments, setSelectedAssignment, setLoading } =
    assignmentSlice.actions

export default assignmentSlice.reducer