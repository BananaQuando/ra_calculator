import React from "react";
import TasksCards from "./TasksCards";
import { Droppable } from "react-beautiful-dnd";

function ListGroup(props) {
    return (
        <ul className="todo-list-wrapper list-group list-group-flush">
            {props.children}
        </ul>
    );
}

export default class Calculator extends React.Component {

    onDragEnd = result => {
        console.log(result);
    }

    render() {
        return (
            <>
                <div className="col-md-8">
                    <div className="card-hover-shadow-2x mb-3 mt-3 card">
                        <div className="card-header">Calculator</div>
                        <div className="card-body">
                            <div className="drag-and-drop" onDragEnd={this.onDragEnd}>
                                <div className="drag-and-drop__text">
                                    Drop tasks
                                </div>
                            </div>
                        </div>
                        <div className="d-block text-right card-footer">
                            <div className="widget-content p-0">
                                <div className="widget-content-outer">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left">
                                            <div className="widget-heading">Total Orders</div>
                                        </div>
                                        <div className="widget-content-right">
                                            <div className="widget-numbers text-success">
                                                <small>$</small>
                                                0
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="main-card card mt-3">
                        <div className="card-header">
                            Task type
                        </div>
                        <Droppable droppableId={`1`}>
                            {(provided) => (
                                <ul 
                                    className="todo-list-wrapper list-group list-group-flush"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {
                                        this.props.data.map((task_data, index) => (
                                            <TasksCards key={task_data['id']} data={task_data} index={index} />
                                        ))
                                    }
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </div>
                </div>
            </>
        );
    }
}