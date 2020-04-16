import React from "react";
import TasksCards from "./TasksCards";
import CalculatorCards from "./CalculatorCards";
import initialData from "../../Store/initialData";
import calculatorData from "../../Store/calculatorData";

export default class Calculator extends React.Component {
    state = {
        tasks: initialData,
        calculator: calculatorData,
        min_time: '',
        avr_time: '',
        max_time: '',
    }

    onDragStart = (event) => {
        event.dataTransfer.setData('item-index', event.target.getAttribute('data-item-index'))
    }

    onDragLeave = (event) => {
        event.target.classList.remove("drag-over");
    }

    onDragOver = (event) => {
        event.target.classList.add("drag-over");
        event.preventDefault();
    }

    onDrop = (event) => {
        const item_index = event.dataTransfer.getData('item-index');
        this.addToCalculator(item_index);
    }

    addToCalculator = (index) => {
        const current_item = this.state.tasks[index];
        let new_item = current_item;
        let newCalculatorData = this.state.calculator;
        newCalculatorData.push(new_item);

        this.setState({
            calculator: newCalculatorData
        });
        this.calculateTime();
    }

    calculateTime = () => {
        let min_time, avr_time, max_time;
        const calculatorData = this.state.calculator;
        calculatorData.forEach((el, index) => {
            min_time = min_time + el.min_time;
            avr_time = avr_time + el.avr_time;
            max_time = max_time + el.max_time;
            console.log(min_time);
            console.log(avr_time);
            console.log(max_time);
        });
        min_time = min_time / calculatorData.length;
        avr_time = avr_time / calculatorData.length;
        max_time = max_time / calculatorData.length;

        this.setState({
            min_time: min_time,
            avr_time: avr_time,
            max_time: max_time
        });
    }

    onClick = (event) => {
        const index = event.currentTarget.getAttribute('data-index');
        let newCalculatorData = this.state.calculator;
        newCalculatorData.splice(index, 1);
        this.calculateTime();
        this.setState({
            calculator: newCalculatorData
        });
    }

    render() {
        return (
            <>
                <div className="col-md-8">
                    <div className="card-hover-shadow-2x mb-3 mt-3 card">
                        <div className="card-header">Calculator</div>
                        <div className="card-body">
                            {
                                this.state.calculator.length !== 0
                                    ?
                                    <div
                                        onDrop={this.onDrop}
                                        onDragOver={this.onDragOver}
                                        onDragLeave={this.onDragLeave}
                                    >
                                        {this.state.calculator.map((task_data, index) => (
                                            <CalculatorCards
                                                key={index}
                                                data={task_data}
                                                index={index}
                                                onClick={this.onClick}
                                            />
                                        ))}
                                    </div>
                                    :
                                    <div
                                        className="drag-and-drop"
                                        onDrop={this.onDrop}
                                        onDragOver={this.onDragOver}
                                        onDragLeave={this.onDragLeave}
                                    >
                                        <div className="drag-and-drop__text">
                                            Drop tasks
                                        </div>
                                    </div>
                            }
                        </div>
                        <div className="d-block text-right card-footer">
                            <div className="widget-content p-0">
                                <div className="widget-content-outer">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left">
                                            <div className="widget-heading">Total time</div>
                                        </div>
                                        <div className="widget-content-right">
                                            {
                                                this.state.calculator.length !== 0 
                                                ? <>
                                                    <div className="badge badge-success ml-1">
                                                        {this.state.min_time}
                                                    </div>
                                                    <div className="badge badge-warning ml-1">
                                                        {this.state.avr_time}
                                                    </div>
                                                    <div className="badge badge-danger ml-1">
                                                        {this.state.max_time}
                                                    </div>
                                                </>
                                                : ''
                                            }
                                            
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
                        <ul
                            className="todo-list-wrapper list-group list-group-flush"
                        >
                            {
                                this.state.tasks.map((task_data, index) => (
                                    <TasksCards
                                        key={task_data['id']}
                                        data={task_data}
                                        index={index}
                                        draggable={true}
                                        onDragStart={this.onDragStart}
                                    />
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}