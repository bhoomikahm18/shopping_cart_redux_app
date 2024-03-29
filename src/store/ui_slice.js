import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { notification: null },
    reducers: {
        showNotification(draft, action) {
            draft.notification = {
                message: action.payload.message,
                type: action.payload.type,
                open: action.payload.open,
            };
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice;