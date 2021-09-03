import "./notificationsContainer.scss";

export default function createContainer() {
    const containerId = "notificationsContainer";
    let element = document.getElementById(containerId);

    if (element) {
        return element;
    }

    element = document.createElement("div");
    element.setAttribute("id", containerId);
    element.className = "notifications-container";
    document.body.appendChild(element);
    return element;
}
