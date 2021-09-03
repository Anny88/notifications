import React, {useContext} from "react";
import '../App.scss';
import {NotificationContext} from "../notifications/NotificationProvider";
import {Status} from "../notifications/Notification/StatusIcon";
import './DemoPage.scss';

function DemoPage() {
    const { createNotification } = useContext(NotificationContext);

    return (
      <div id="demo-page">
          <h1>Notifications Demo</h1>
          <h3>Click me to try it out</h3>
          <button className="info" onClick={() => createNotification(Status.info, 'Some info')}>Info</button>
          <button className="success" onClick={() => createNotification(Status.success, 'Great success!')}>Success</button>
          <button className="warning" onClick={() => createNotification(Status.warning, 'Oh-oh.. warning')}>Warning</button>
          <button className="error" onClick={() => createNotification(Status.error, 'Read alarm!')}>Error</button>
      </div>
  );
}

export default DemoPage;
