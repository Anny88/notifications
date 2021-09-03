import React from "react";
import PropTypes from "prop-types";
import CloseIcon from '@material-ui/icons/CloseOutlined';
import WarningIcon from '@material-ui/icons/ErrorOutlineOutlined';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import SuccessIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import ErrorIcon from '@material-ui/icons/NotInterestedOutlined';
import createContainer from "../createNotifications/createNotification";
import {createPortal} from "react-dom";
import "./Notification.scss";

const DEFAULT_MESSAGE = 'Lorem ipsum dolor sit amet';

export function Notification({ status = Color.info, onDelete, title, message = DEFAULT_MESSAGE }) {
    const container = createContainer();

    return createPortal(
        <div className={`notification ${status}`}>
            <div className="icon-container">{Icon[status]}</div>
            <div className="text-content">
                <span className="title">{title}</span>
                <span className="message">{message}</span>
            </div>
            <button className="closeButton" onClick={onDelete}>
                <CloseIcon fontSize="small" />
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

const Icon = {
    info: <InfoIcon fontSize="small" />,
    success: <SuccessIcon fontSize="small" />,
    warning:  <WarningIcon fontSize="small" />,
    error: <ErrorIcon fontSize="small" />,
};

Notification.propTypes = {
    status: PropTypes.oneOf(Object.keys(Color)),
    title: PropTypes.string.isRequired,
    message: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
};
