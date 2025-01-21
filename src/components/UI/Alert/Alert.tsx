import * as React from "react";

interface AlertProps extends React.PropsWithChildren {
    type: "primary" | "success" | "danger" | "warning";
    onDismiss?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, onDismiss, children }) => {
    return (
        <>
            <div className={`alert alert-${type} container d-flex justify-content-between`} role="alert">
                <span>{children}</span>
                {onDismiss ? (
                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={onDismiss}
                    />
                ) : null}
            </div>
        </>
    );
};

export default Alert;