import React from "react";
import './App.scss';
import NotificationService from "./notifications/NotificationService";
import DemoPage from "./DemoPage/DemoPage";
import {NotificationProvider} from "./notifications/NotificationProvider";

function App() {
    return (
      <div className="App">
          <NotificationProvider>
              <NotificationService maxAmount={6} />
              <DemoPage />
          </NotificationProvider>
      </div>
  );
}

export default App;
