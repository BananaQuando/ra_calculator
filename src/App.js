import React from 'react';
import './css/main.css';
import Calculator from './components/calculator';
import initialData from "./Store/initialData";
import { DragDropContext } from 'react-beautiful-dnd';

let data = initialData;

const onDragEnd = result => {
  const { destination, source, draggableId } = result;

  if (!destination) {
    return;
  }

  if(
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ){
    return;
  }

  // const tasks = data;
  // const newTaskIds = Array.from(tasks);
  // const draggableKey = data.indexOf(draggableId);
  // console.log(data[]);
  // console.log(draggableId);
  // console.log(data[1]);
  // console.log(data[draggableId]);
  // newTaskIds.splice(source.index, 1);
  // newTaskIds.splice(destination.index, 0, data.indexOf());
  
  // console.log(newTaskIds);

  // data = newTaskIds;
}

// https://egghead.io/lessons/react-reorder-a-list-with-react-beautiful-dnd

function App() {
  return (
    <div className="container">
      <div className="row">
        <DragDropContext onDragEnd={onDragEnd}>
          <Calculator data={data} />
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
