import {Card} from "react-bootstrap";
import React from "react";
import Link from 'next/link';
import {urlFor} from "../lib/api";


const CardItem = (props) => {
    return (
        <div>
            <Card className={`fj-card`}>
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
                    <div className="view overlay">
                        <Card.Img

                            src={
                                urlFor(props.image)
                                    .height(300)
                                    .crop('center')
                                    .fit('clip')
                                    .url()
                            }
                            alt="Card image cap"
                        />
                    </div>
                    <Card.Body>
                        <Card.Title className="card-main-title">{props.title}</Card.Title>
                        <Card.Text>{props.subtitle}</Card.Text>
                    </Card.Body>
                </div>
                {props.link &&
                <Link {...props.link}>
                    <a className="card-button">
                        Read More
                    </a>
                </Link>
                }
            </Card>
        </div>
    )
}

export default CardItem;
