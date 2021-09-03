import React from "react";
import './App.scss';
import {NotificationProvider} from "./notifications/NotificationProvider";
import NotificationService from "./notifications/NotificationService";
import DemoPage from "./DemoPage";

function App() {
    return (
      <div className="App">
          <NotificationProvider>
              <NotificationService />
              <DemoPage />
          </NotificationProvider>
      </div>
  );
}

export default App;
