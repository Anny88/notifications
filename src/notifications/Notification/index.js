import React from "react";
import PropTypes from "prop-types";
import CloseIcon from '@material-ui/icons/CloseOutlined';
import createContainer from "../createNotifications/createNotification";
import {createPortal} from "react-dom";
import "./Notification.scss";
import StatusIcon, {Status} from "./StatusIcon";

const DEFAULT_MESSAGE = 'Lorem ipsum dolor sit amet';

export function Notification({ status = Status.info, onDelete, title, message = DEFAULT_MESSAGE }) {
    const container = createContainer();

    return createPortal(
        <div className={`notification ${status}`}>
            <div className="icon-container">
                <StatusIcon status={status} />
            </div>
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

Notification.propTypes = {
    status: PropTypes.oneOf(Object.keys(Status)),
    title: PropTypes.string.isRequired,
    message: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
};
