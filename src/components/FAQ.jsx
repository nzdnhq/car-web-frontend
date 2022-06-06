import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/css/style.css'
import { Container, Row, Col } from 'react-bootstrap'

import Accordion from './Accordion'
import AccordionList from '../public/data/accordion.json'

const FAQComponent = () => {
  return (
    <section id="faq" className="py-5 mt-5">
      <Container className="pt-5">
        <Row>
          <Col lg={5}>
            <h2 className="h2">Frequently Asked Question</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </Col>
          <Col lg={7}>
            {AccordionList.map((item) => {
              return (
                <Accordion
                  key={item.id}
                  header={item.header}
                  body={item.body}
                />
              )
            })}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FAQComponent
