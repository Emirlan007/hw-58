import * as React from "react";
import BackDrop from "../BackDrop/BackDrop.tsx";

interface ModalProps extends React.PropsWithChildren {
    title?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({isOpen = false, onClose, children ,title = 'Custom title'}) => {
return (
    <>
        <BackDrop isOpen={isOpen} onClose={onClose} />
            <div className="modal show" style={{display: isOpen ? 'block' : 'none',
                position: 'fixed',
                width: '500px',
                height: 'auto',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 ">{title}</h1>
                            <button type="button" className="btn-close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={onClose}>Close</button>
                        </div>
                    </div>

                </div>
            </div>
    </>
)
}

export default Modal;