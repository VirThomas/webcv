import React from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './modalBtn.css'

const setParagraphe = (company) => {
    if (company === "Veepee") {
        return "Développement de 4 Projets sur 12 mois : \n-Indexation d'une base de données sur un moteur de recherche sous SolR. Stack : Golang, SolR \n \n -Creation d'un POC d'une application web permettant de tracker en temps reel les echantillons dans les entrepots. Stack : NodeJs / Elm \n \n -Rajout de la possibilité d'ajouter au panier depuis une webview ainsi que l'integration de la caméra pour acceder a un service d'essayage de rouges a levres en AR. Stack : Java-Kotlin/ReactJs"
    }
    if (company === "Captive") {
        return "Captive"
    }
    if (company === "Cora") {
        return "Cora"
    }
}

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.props.company}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    {props.text}
                    <br />
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const CustomBtn = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const paragraphe = setParagraphe(props.company);
    return (
        <>
            <Button className="experience" variant="primary" onClick={() => setModalShow(true)}>
                <div className="date">{props.date}</div>
                <div className="jobLabel">
                    <div className="company">{props.company}</div>
                    <div className="job">{props.job}</div>
                </div>
            </Button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                text={paragraphe}
                props={props}
            />
        </>
    )

}

export default CustomBtn;