import React, {useState} from "react";
import PropTypes from "prop-types";
import {createPortal} from "react-dom";
import CloseIcon from '@material-ui/icons/CloseOutlined';
import createContainer from "../createNotifications/createNotification";
import StatusIcon, {Status} from "./StatusIcon";
import "./Notification.scss";
import "./Animations.scss";

const DEFAULT_MESSAGE = 'Lorem ipsum dolor sit amet';
const DEFAULT_TIME_TO_DELETE = 300;

export function Notification({ status = Status.info, onClose, title, message = DEFAULT_MESSAGE }) {
    const container = createContainer();
    const [isClosing, setIsClosing] = useState(false);

    React.useEffect(() => {
        if (isClosing) {
            const timeoutId = setTimeout(onClose, DEFAULT_TIME_TO_DELETE);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [isClosing, onClose]);

    return createPortal(
        <div className={`notification ${status} ${isClosing ? 'slideOut' : 'slideIn'}`}>
            <div className="icon-container">
                <StatusIcon status={status} />
            </div>
            <div className="text-content">
                <span className="title">{title}</span>
                <span className="message">{message}</span>
            </div>
            <button className="closeButton" onClick={() => setIsClosing(true)}>
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
    onClose: PropTypes.func.isRequired,
};
