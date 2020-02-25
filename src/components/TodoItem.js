import React, { Component } from 'react'
import PropTypes from 'prop-types';
// 
export class TodoItem extends Component {
    render() {
        const { id, img } = this.props.todo;
        return (
            <div className="row">
                    <img src={img} alt={id} onClick={this.props.markComplete.bind
                    (this, id)} />
                    {/* <p>{id}</p> */}
            </div>
        )
    }
}
// 
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
// 
export default TodoItem
