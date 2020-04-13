import React from "react";
import { Draggable } from 'react-beautiful-dnd';

function ListItem(props) {
    return (
        <li className="list-group-item">
            {props.children}
        </li>
    );
}

export default class TasksCards extends React.Component {
    render() {
        return (
            <Draggable draggableId={`${this.props.data.id}`} index={this.props.index}>
                {(provided) => (
                    <li
                        className="list-group-item"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                                <div className="widget-content-left">
                                    <div className="widget-heading">
                                        {this.props.data.group_type}
                                    </div>
                                </div>
                                <div className="widget-content-right">
                                    <div className="badge badge-success ml-1">
                                        {this.props.data.min_time}
                                    </div>
                                    <div className="badge badge-warning ml-1">
                                        {this.props.data.avr_time}
                                    </div>
                                    <div className="badge badge-danger ml-1">
                                        {this.props.data.max_time}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                )}
            </Draggable>
        );
    }
}