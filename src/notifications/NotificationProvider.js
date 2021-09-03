import React, { createContext, useState } from 'react';
const NotificationContext = createContext(undefined);

const NotificationProvider = (props) => {
    const [notifications, setNotifications] = useState([]);

    const createNotification = (status, title, message) =>
        setNotifications(  (currentNotifications) => [...currentNotifications,
            { status, title, message, id: currentNotifications.length }
        ]);

    const deleteNotification = (id) =>
        setNotifications(
            notifications.filter((notification) => notification.id !== id)
        );

    return <NotificationContext.Provider value={{ notifications, createNotification, deleteNotification }} {...props} />;
};

export { NotificationContext, NotificationProvider };
