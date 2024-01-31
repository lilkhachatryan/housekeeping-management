import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Card } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const UnassignedTasksPool = ({ tasks, handleDeleteTask, handleEditTask }) => {
    return (
        <Droppable droppableId="unassignedTasksPool">
            {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                    <h3>Unassigned Tasks</h3>
                    {tasks.map((task, index) => (
                        <Draggable key={`unassigned-task-${task.id}`} draggableId={`unassigned-task-${task.id}`} index={index}>
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
                                    <DeleteOutlined onClick={() => handleDeleteTask(task.id)}/>
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

export default UnassignedTasksPool;
