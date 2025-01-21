import './App.css'
import Modal from "./components/Modal/Modal.tsx";
import * as React from "react";


const App: React.FC = () => {

    const [showModal, setShowModal] = React.useState<boolean>(true);

    return(
        <>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setShowModal(!showModal)}
                >
                    Open modal
                </button>
            </div>
            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title="Some kinda modal title"
            >
                <p>This is modal content</p>
            </Modal>
        </>
    )
};

export default App
