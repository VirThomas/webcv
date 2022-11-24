import React from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './modalBtn.css'

const setParagraphe = (company) => {
    if (company === "Plezi") {
        // eslint-disable-next-line
        return "Maintenance et évolution de la base de code Legacy : \n\
        - Développement d'un micro service utilisant Kafka, Playwright, et PGSql en BDD. \n\
        - Mise en place des méthodologies agiles au sein de mon équipe\n\
        - Toujours orienté clients/Utilisateursn\n\
        - Accompagnement des nouveaux arrivants sur le produit."
    }
    if (company === "Veepee") {
        // eslint-disable-next-line
        return "Développement de 4 Projets sur 12 mois : \n\
        - Indexation d'une base de données sur un moteur de recherche sous SolR. Stack : Golang, SolR \n\
        - Création d'un POC d'une application web permettant de tracker en temps reel les echantillons dans les entrepots. Stack : NodeJs / Elm \n\
        - Implémentation de la possibilité d'ajouter au panier depuis une webview via des calls API ainsi que l'integration de la caméra pour acceder a un service d'essayage de rouges a levres en AR. Stack : Java - Kotlin / ReactJs"
    }
    if (company === "Captive") {
        // eslint-disable-next-line
        return "Développement de features sur plusieurs projets : \n\
        - TDD (Test Driven Development)\n\
        - CI (Intégration continue)\n\
        - Code Review\n\
        - Méthodes agiles (kanban, rétrospectives, poker planning, ...)\n\
        Stack : Ruby/Ruby on Rails, Html/Css, Heroku, Git, Redis, PostgreSQL"
    }
    if (company === "Cora") {
        return "Mise en rayon"
    }
    if (company === "Printemps") {
        // eslint-disable-next-line
        return "Secteur Horlogerie :\n\
        - Réalisation des vitrines\n\
        - Vente directe au client\n\
        - Fidélisation du client"
    }
    if (company === "École 42") {
        // eslint-disable-next-line
        return "Formation à la programmation en C :\n\
        - Auto-apprentissage\n\
        - Peer-to-peer\n\
        - Réalisation d'un résolveur de Tetris (Backtracking)\n\
        - Creation d'un Ray - Tracer avec mouvements de caméra en temps réel."
    }
    if (company === "IFA Metz" || company === "IPF Paris") {
        const annee = company === "IPF Paris" ? "(1ere annee)." : "(2eme annee)."
        return "Préparation d'un BTS Management des unités commerciales en alternance " + annee
    }
    if (company === "Lycée Jean Lurçat") {
        return "Obtention d'un Baccalauréat Économique et Social."
    }
}

function MyModal(props) {
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
                <h4>{props.props.date}</h4>
                <p className="display-linebreak">
                    {props.text}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="closeBtn" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const CustomBtn = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button className="experience" variant="primary" onClick={() => setModalShow(true)}>
                <div className="date">{props.date}</div>
                <div className="jobLabel">
                    <div className="company">{props.company}</div>
                    <div className="job">{props.job}</div>
                </div>
            </Button>
            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                text={setParagraphe(props.company)}
                props={props}
            />
        </>
    )

}

export default CustomBtn;