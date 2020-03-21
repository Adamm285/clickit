import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
// 
export class TodoItem extends Component {
    render() {
        const { id, img } = this.props.todo;
        return (
            <Col xs="4" md="4" lg="3">
                <img src={img} alt={id} 
                onClick={this.props.markComplete.bind
                (this, id)} />
            </Col>
        )
    }
}
// 
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
// 
export default TodoItem
