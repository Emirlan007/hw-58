import * as React from "react";

interface IBackDrop {
    isOpen?: boolean;
    onClose?: () => void;
}

const BackDrop: React.FC<IBackDrop> = ( {isOpen = false, onClose} ) => {
    return (
            <div
                className="modal-backdrop show"
                style={{display: isOpen ? 'block' : 'none'}}
                onClick={onClose}
            />
    );
};

export default BackDrop;