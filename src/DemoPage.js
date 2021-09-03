import React, {useContext} from "react";
import './App.scss';
import { Color} from "./notifications/Notification";
import {NotificationContext} from "./notifications/NotificationProvider";

function DemoPage() {
    const { createNotification } = useContext(NotificationContext);

    return (
      <div>
          <h1>Notifications Demo</h1>
          <button onClick={() => createNotification(Color.info, 'Some info')}>Info</button>
          <button onClick={() => createNotification(Color.success, 'Great success!')}>Success</button>
          <button onClick={() => createNotification(Color.warning, 'Oh-oh.. warning')}>Warning</button>
          <button onClick={() => createNotification(Color.error, 'Read alarm!')}>Error</button>
      </div>
  );
}

export default DemoPage;
