import * as React from "react";
import BackDrop from "../BackDrop/BackDrop.tsx";

interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({isOpen = false, onClose}) => {
return (
    <>
        <BackDrop isOpen={isOpen} onClose={onClose} />
            <div className="modal show" style={{display: isOpen ? 'block' : 'none'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 ">Modal title</h1>
                            <button type="button" className="btn-close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            Modal Content
                        </div>
                    </div>

                </div>
            </div>
    </>
)
}

export default Modal;