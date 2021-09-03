import React, { useContext } from 'react';
import {Notification} from "./Notification";
import {NotificationContext} from "./NotificationProvider";

const NotificationService = () => {
    const { notifications,  deleteNotification} = useContext(NotificationContext);

    return (
        <div>
            {notifications.map(({ id, status, title, message }) => (
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

export default NotificationService;
