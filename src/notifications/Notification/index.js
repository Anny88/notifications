import React from "react";
import PropTypes from "prop-types";
import CloseOutlineIcon from '@material-ui/icons/CloseOutlined';
import WarningIcon from '@material-ui/icons/ErrorOutlineOutlined';
import createContainer from "../createNotifications/createNotification";
import {createPortal} from "react-dom";
import "./Notification.scss";

const DEFAULT_TITLE = 'Lorem ipsum';
const DEFAULT_MESSAGE = 'Lorem ipsum ';

export function Notification({ color = Color.info, onDelete, title, message }) {
    const container = createContainer();

    return createPortal(
        <div className={`notification ${color}`}>
            <WarningIcon />
            <div className="text-content">
                <span className="title">{title || DEFAULT_TITLE}</span>
                <span className="message">{message || DEFAULT_MESSAGE}</span>
            </div>
            <button className="closeButton" onClick={onDelete}>
                <CloseOutlineIcon />
            </button>
        </div>,
        container
    );
}

export const Color = {
    info: "info",
    success: "success",
    warning: "warning",
    error: "error",
};

Notification.propTypes = {
    notificationType: PropTypes.oneOf(Object.keys(Color)),
    children: PropTypes.element,
};
