import React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
const NotificationContext = createContext(undefined);

const NotificationProvider = (props) => {
    const [notifications, setNotifications] = useState([]);

    const createNotification = (status, title, message) =>
        setNotifications(  (currentNotifications) => [...currentNotifications,
            { status, title, message, id: uuid() }
        ]);

    const deleteNotification = (id) =>
        setNotifications(
            notifications.filter((notification) => notification.id !== id)
        );

    return <NotificationContext.Provider value={{ notifications, createNotification, deleteNotification }} {...props} />;
};

export { NotificationContext, NotificationProvider };
