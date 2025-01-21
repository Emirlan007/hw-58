import './App.css'
import Modal from "./components/Modal/Modal.tsx";
import * as React from "react";
import Alert from "./components/UI/Alert/Alert.tsx";


const App: React.FC = () => {

    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [showAlert, setShowAlert] = React.useState(true);

    return(
        <>
            <div className="d-flex justify-content-center align-items-center my-5">
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

            {showAlert && (
                <Alert
                    type="warning"
                    onDismiss={() => setShowAlert(false)}>
                    This is a warning type alert
                </Alert>

            )}
            <Alert type="success">This is a success type alert</Alert>
        </>
    )
};

export default App
