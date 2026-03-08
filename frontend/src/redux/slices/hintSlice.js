import { createSlice } from "@reduxjs/toolkit"

const hintSlice = createSlice({
    name: "hint",
    initialState: {
        hint: "",
        loading: false,
        error: null
    },
    reducers: {
        setHint: (state, action) => {
            state.hint = action.payload
        },

        setHintLoading: (state, action) => {
            state.loading = action.payload
        },

        setHintError: (state, action) => {
            state.error = action.payload
        },

        clearHint: (state) => {
            state.hint = ""
            state.error = null
        }
    }
})

export const {
    setHint,
    setHintLoading,
    setHintError,
    clearHint
} = hintSlice.actions

export default hintSlice.reducer