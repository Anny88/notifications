import React, {useContext} from "react";
import './App.scss';
import {NotificationContext} from "./notifications/NotificationProvider";
import {Status} from "./notifications/Notification/StatusIcon";

function DemoPage() {
    const { createNotification } = useContext(NotificationContext);

    return (
      <div>
          <h1>Notifications Demo</h1>
          <button onClick={() => createNotification(Status.info, 'Some info')}>Info</button>
          <button onClick={() => createNotification(Status.success, 'Great success!')}>Success</button>
          <button onClick={() => createNotification(Status.warning, 'Oh-oh.. warning')}>Warning</button>
          <button onClick={() => createNotification(Status.error, 'Read alarm!')}>Error</button>
      </div>
  );
}

export default DemoPage;
