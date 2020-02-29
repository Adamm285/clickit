import React from 'react'
import Counter from './Counter'
import {Col, Row} from 'react-bootstrap'
function Header() {
    return (
        <Row className="apptop fixed-top">
            <Col xs="12" lg="4" className="text-center"><h2>Click-it</h2></Col>
            <Col>Memory Game: Don't choose the same sub twice!</Col>
            <Col className="text-right"><Counter/></Col>
        </Row>
    )
}

export default Header
