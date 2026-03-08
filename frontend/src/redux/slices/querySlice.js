import { createSlice } from "@reduxjs/toolkit"

const querySlice = createSlice({
    name: "query",
    initialState: {
        rows: [],
        rowCount: 0,
        loading: false,
        error: null
    },
    reducers: {
        setQueryResult: (state, action) => {
            state.rows = action.payload.rows
            state.rowCount = action.payload.rowCount
        },

        setQueryLoading: (state, action) => {
            state.loading = action.payload
        },

        setQueryError: (state, action) => {
            state.error = action.payload
        },

        clearQueryResult: (state) => {
            state.rows = []
            state.rowCount = 0
            state.error = null
        }
    }
})

export const {
    setQueryResult,
    setQueryLoading,
    setQueryError,
    clearQueryResult
} = querySlice.actions

export default querySlice.reducer