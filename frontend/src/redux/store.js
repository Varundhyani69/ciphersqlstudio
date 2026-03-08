import { configureStore } from "@reduxjs/toolkit"
import assignmentReducer from "./slices/assignmentSlice"
import queryReducer from "./slices/querySlice"
import hintReducer from "./slices/hintSlice"

export default configureStore({
    reducer: {
        assignments: assignmentReducer,
        query: queryReducer,
        hint: hintReducer
    }
})