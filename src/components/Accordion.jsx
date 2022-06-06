import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/style.css";
import {Accordion} from "react-bootstrap";

class AccordionComponent extends Component {
    render() {
        return (
            <Accordion key={this.props.id}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{this.props.header}</Accordion.Header>
                    <Accordion.Body>{this.props.body}</Accordion.Body>
                </Accordion.Item>
            </Accordion>
        );
    }
}

export default AccordionComponent;
