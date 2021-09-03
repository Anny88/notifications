import InfoIcon from "@material-ui/icons/InfoOutlined";
import SuccessIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import WarningIcon from "@material-ui/icons/ErrorOutlineOutlined";
import ErrorIcon from "@material-ui/icons/NotInterestedOutlined";
import React from "react";
import PropTypes from "prop-types";

export const Status = {
    info: "info",
    success: "success",
    warning: "warning",
    error: "error",
};

const StatusIcon = ({ status }) => {
    switch(status) {
        case Status.info:
            return <InfoIcon fontSize="small" />;
        case Status.success:
            return <SuccessIcon fontSize="small" />;
        case Status.warning:
            return <WarningIcon fontSize="small" />;
        case Status.error:
            return <ErrorIcon fontSize="small" />;
        default:
            return <InfoIcon fontSize="small" />;
    }
};

StatusIcon.propTypes = {
    status: PropTypes.oneOf(Object.keys(Status)).isRequired,
};


export default StatusIcon;
