import {Card} from "react-bootstrap";
import React from "react";

const CardListItem = (props) => {
    return (
        <div>
            {/* CardListItem STARTS */}
            <Card className={`fj-card fj-card-list`}>
                <div className="card-body-wrapper">
                    <Card.Header
                        className="d-flex flex-row">
                        <img
                            src={'https://via.placeholder.com/150'}
                            className="rounded-circle mr-3"
                            height="50px"
                            width="50px"
                            alt="avatar"/>
                        <div>
                            <Card.Title className="font-weight-bold mb-1">Might add categories here soon</Card.Title>
                            <Card.Text className="card-date">{props.date}</Card.Text>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title className="card-main-title">{props.title}</Card.Title>
                        <Card.Text>{props.subtitle}</Card.Text>
                    </Card.Body>
                </div>
                <a href="#" className="card-button">
                    Read More
                </a>
            </Card>
            {/* CardListItem ENDS */}
        </div>
    )
}

export default CardListItem;
