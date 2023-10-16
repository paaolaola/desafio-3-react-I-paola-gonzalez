import React from "react";

const Alert = ({ alertColor, alertMessage }) => {
    return <div className={`alert alert-${alertColor}`}>{alertMessage}</div>;
};

export default Alert;
