import React from "react";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui_slice";
const Notification = (props) => {
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.ui.notification);
    const handleClose = () => {
        dispatch(
            uiActions.showNotification({
                open: false,
            })
        );
    };
    return (
        <div>
            {notification.open && (
                <Alert onClose={handleClose} severity={props.type}>
                    {props.message}
                </Alert>
            )}
        </div>
    );
};

export default Notification;