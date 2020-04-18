import React from "react";
import { formatTime } from "../../utils/formatter";

export default class TasksCards extends React.Component {
    render() {
        return (
            <li
                className="list-group-item"
                draggable={this.props.draggable}
                onDragStart={this.props.onDragStart}
                data-item-index={this.props.index}
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
                                {formatTime(this.props.data.min_time)}
                            </div>
                            <div className="badge badge-warning ml-1">
                                {formatTime(this.props.data.avr_time)}
                            </div>
                            <div className="badge badge-danger ml-1">
                                {formatTime(this.props.data.max_time)}
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}