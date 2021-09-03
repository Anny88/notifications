import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Notification} from "./Notification";
import {NotificationContext} from "./NotificationProvider";

const NotificationService = ({ maxAmount = 5 }) => {
    const { notifications,  deleteNotification} = useContext(NotificationContext);
    const [ notificationsToShow,  setNotificationsToShow ] = useState([]);

    useEffect(() => {
        if (notifications.length > maxAmount) {
            setNotificationsToShow(notifications.slice(notifications?.length - maxAmount));
        } else {
            setNotificationsToShow(notifications);
        }
    }, [maxAmount, notifications, setNotificationsToShow]);

    return (
        <div>
            {notificationsToShow.map(({ id, status, title, message }) => (
                <Notification
                    key={id}
                    status={status}
                    onDelete={() => deleteNotification(id)}
                    title={title}
                    message={message}
                />
            ))}
        </div>
    );
};

NotificationService.propTypes = {
    maxAmount: PropTypes.number
}

export default NotificationService;
