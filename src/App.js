import React, {useState} from "react";
import './App.scss';
import { Notification, Color} from "./notifications/Notification";

function App() {
  const [notifications, setNotifications] = useState([]);

  const createNotification = (color) =>
      setNotifications([...notifications, { color, id: notifications.length }]);

  const deleteNotification = (id) =>
    setNotifications(
        notifications.filter((notification) => notification.id !== id)
    );

  return (
      <div className="App">
        <h1>Notification Demo</h1>
        <button onClick={() => createNotification(Color.info)}>Info</button>
        <button onClick={() => createNotification(Color.success)}>Success</button>
        <button onClick={() => createNotification(Color.warning)}>Warning</button>
        <button onClick={() => createNotification(Color.error)}>Error</button>
        {notifications.map(({ id, color }) => (
            <Notification
                key={id}
                status={color}
                onDelete={() => deleteNotification(id)}
                title="Some status"
                message="something went wrong...."
            />
        ))}
      </div>
  );
}

export default App;
