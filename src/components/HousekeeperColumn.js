import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Card } from 'antd';
import { DeleteOutlined, EditOutlined} from "@ant-design/icons";

const HousekeeperColumn = ({ housekeeper, handleDeleteTask, handleEditTask }) => {
    return (
        <Droppable droppableId={`housekeeper-${housekeeper.id}`}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{
                        background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                        padding: 4,
                        minHeight: 500
                    }}
                >
                    <h3>{housekeeper.name}</h3>
                    {housekeeper.tasks.map((task, index) => (
                        <Draggable key={`housekeeper-${housekeeper.id}-task-${task.id}`} draggableId={`housekeeper-${housekeeper.id}-task-${task.id}`} index={index}>
                            {(provided, snapshot) => (
                                <Card
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                        ...provided.draggableProps.style,
                                        marginBottom: '8px',
                                        backgroundColor: snapshot.isDragging ? 'lightgreen' : 'white',
                                    }}
                                >
                                    <div>{task.title} - {task.hotelApartment}</div>
                                    <div>{task.duration} mins - {task.deadline}</div>
                                    <EditOutlined onClick={() => handleEditTask(task)} />
                                    <DeleteOutlined onClick={() => handleDeleteTask(task.id, housekeeper.id)}/>
                                </Card>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default HousekeeperColumn;
